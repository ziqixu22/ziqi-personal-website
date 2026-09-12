// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { createElement } from "react";

import { credentials, experience, getStoredLanguage, home, pages, projectCategories, projects, research, selectedExperience, site, soa } from "./site";
import { languageStorageKey, normalizeLanguage } from "../i18n/language";
import { HomePage } from "../pages/HomePage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ResearchPage } from "../pages/ResearchPage";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { parseRoute } from "../app/routes";

afterEach(cleanup);

describe("portfolio content model", () => {
  it("keeps Home, Research, and Projects in the top navigation", () => {
    expect(pages.map((page) => page.slug)).toEqual([
      "home",
      "research",
      "projects",
    ]);
  });

  it("uses a unifying quantitative narrative", () => {
    expect(site.positioning).toMatch(/statistics, computation, and quantitative thinking/i);
  });

  it("does not retain the removed application note", () => {
    expect("resumeNote" in site).toBe(false);
  });

  it("uses English unless a supported language is explicitly selected", () => {
    expect(normalizeLanguage("zh")).toBe("zh");
    expect(normalizeLanguage("de")).toBe("en");
    expect(languageStorageKey).toBe("ziqi-site-language");
    expect(getStoredLanguage({ getItem: () => "zh" } as Pick<Storage, "getItem">)).toBe("zh");
  });

  it("uses deployment-safe supplied logo assets and only documented research links", () => {
    expect(experience.every((item) => item.logoSrc.includes("logos/") && !item.logoSrc.startsWith("/"))).toBe(true);
    expect(research[0].institutionUrl).toBe("https://www.ncsa.illinois.edu/");
    expect(research[1].advisors[2].url).toBeUndefined();
  });

  it("keeps contact actions on Home rather than a dedicated page", () => {
    expect(pages.map((page) => String(page.slug))).not.toContain("contact");
    expect(site.email).toMatch(/@/);
    expect(site.github).toContain("github.com");
    expect(site.linkedin).toBe("https://www.linkedin.com/in/ziqi12/");
    expect(site.email).toBe("xuziqi2003@gmail.com");
  });

  it("moves verified professional profile content to Home", () => {
    expect(experience).toHaveLength(5);
    expect(home.teaching).toHaveLength(2);
    expect(home.honors).toHaveLength(3);
    expect(home.honors.map((honor) => honor.title.en)).toEqual([
      "State Farm Actuarial Science Scholarship",
      "China Undergraduate Life Science Contest (2022, Entrepreneurship)",
      "The 8th China International College Students’ “Internet+” Innovation and Entrepreneurship Competition",
    ]);
    expect(soa.exams.map((exam) => exam.name)).toEqual(["SOA Exam P", "SOA Exam FM", "SOA Exam SRM", "SOA Exam FAM"]);
  });

  it("removes the former Home subtitle and keeps the corrected IDX Exchange dates", () => {
    expect("headline" in site).toBe(false);
    expect(experience.find((item) => item.company === "IDX Exchange")?.dates.en).toBe("September 2024 – December 2024");
    expect(experience.find((item) => item.company === "IDX Exchange")?.dates.zh).toBe("2024年9月 – 2024年12月");
  });

  it("uses professional advisor titles and the supplied poster resources", () => {
    expect(research[0].advisors).toEqual([
      { name: "Prof. Angela Lyons", url: "https://csames.illinois.edu/directory/profile/anglyons" },
      { name: "Dr. Aiman Soliman", url: "https://aimansoliman.com/" },
    ]);
    expect(research[1].advisors.slice(0, 2)).toEqual([
      { name: "Prof. Xiaochen Jing", url: "https://math.illinois.edu/directory/profile/xjing4" },
      { name: "Prof. Frank Quan", url: "https://www.zhiyuquan.net/" },
    ]);
    expect(research[2].advisors[0]).toEqual({ name: "Prof. Yuliy Baryshnikov", url: "https://ymb.web.illinois.edu/" });
    expect(research[0].posterUrl).toBe("research/ncsa-syrian-refugees-poster.pdf");
    expect(research[2].posterUrl).toBe("research/iml-deep-structure-poster.pdf");
    expect("projectUrl" in research[2]).toBe(false);
  });

  it("keeps the concise bilingual About narrative without a duplicated closing quote", () => {
    expect(home.about.en.intro).toContain("double major in Statistics and Actuarial Science");
    expect(home.about.zh.interests).toHaveLength(3);
    expect("closing" in home.about.zh).toBe(false);
    expect("research" in home.about.en).toBe(false);
    expect("industry" in home.about.en).toBe(false);
    expect("contact" in home.about.en).toBe(false);
    expect(home.honors[0].url).toBe("https://asrm.illinois.edu/state-farm-actuarial-science-scholarship");
    expect(home.honors[1].project?.zh).toBe("淀然一新，替塑成金 —— 淀粉赋予包装新形态");
  });

  it("does not show a return-to-top link in the shared footer", () => {
    const { unmount } = render(createElement(SiteFooter, { language: "en", showQuote: true }));

    expect(screen.queryByRole("link", { name: /back to top|return to top/i })).toBeNull();
    expect(screen.getByText("I’m not afraid of difficulty or challenge. What I fear more is losing my spark. Stay hungry, stay foolish")).toBeTruthy();
    unmount();

    render(createElement(SiteFooter, { language: "zh", showQuote: true }));
    expect(screen.getByText("我不怕困难和挑战，我比较害怕自己是一个暗淡的人。持续学习，长期主义。")).toBeTruthy();
  });

  it("moves teaching from Home to Research using the same entry treatment", () => {
    const { unmount } = render(createElement(HomePage, { language: "en" }));

    expect(screen.queryByRole("heading", { name: /Teaching/ })).toBeNull();
    expect(screen.queryByText("ASRM 402 Grader")).toBeNull();
    unmount();

    const { container } = render(createElement(ResearchPage, { language: "en" }));
    expect(screen.getByRole("heading", { name: "Teaching Experience" })).toBeTruthy();
    expect(screen.getByText("ASRM 402 Grader")).toBeTruthy();
    expect(screen.getByText("STAT 400 Course Assistant")).toBeTruthy();
    expect(container.querySelectorAll(".teaching-entry.research-entry")).toHaveLength(2);
    expect(container.querySelector(".teaching-row")).toBeNull();
  });

  it("shows only the three recruiter-priority experiences on Home", () => {
    expect(selectedExperience.map((item) => item.company)).toEqual(["Chubb", "Scale AI", "NCSA"]);

    render(createElement(HomePage, { language: "en" }));

    expect(screen.getByText("Actuarial Intern, Quantitative Pricing")).toBeTruthy();
    expect(screen.getByText("Technical Advisor Intern, Generative AI")).toBeTruthy();
    expect(screen.getByText("Data Scientist Intern – ML SPIN")).toBeTruthy();
    expect(screen.queryByText("Lockton Re")).toBeNull();
    expect(screen.queryByText("IDX Exchange")).toBeNull();
    expect(screen.queryByText("ILLINOIS ATLAS")).toBeNull();
    expect(screen.queryByRole("heading", { name: "Industry Experience" })).toBeNull();
    expect(screen.queryByRole("heading", { name: "Society of Actuaries ↗" })).toBeNull();
    expect(screen.queryByText(/My undergraduate research focuses/i)).toBeNull();
    expect(screen.queryByText(/Feel free to connect with me on LinkedIn/i)).toBeNull();
  });

  it("links Home directly to Research and Projects", () => {
    render(createElement(HomePage, { language: "en" }));

    expect(screen.getByRole("link", { name: /Explore Research/ }).getAttribute("href")).toBe("#research");
    expect(screen.getByRole("link", { name: /View Projects/ }).getAttribute("href")).toBe("#projects");
  });

  it("keeps verified credentials compact and does not claim paper authorship", () => {
    expect(credentials.awards).toHaveLength(3);
    expect(credentials.exams.map((exam) => exam.name)).toEqual(["SOA Exam P", "SOA Exam FM", "SOA Exam SRM", "SOA Exam FAM"]);
    expect(credentials.researchContribution.url).toBe("https://arxiv.org/abs/2501.14249");

    render(createElement(HomePage, { language: "en" }));

    expect(screen.getByText(/Technical Auditor/)).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Actuarial Exams (SOA)" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /View paper/ }).getAttribute("href")).toBe("https://arxiv.org/abs/2501.14249");
    expect(document.body.textContent).not.toMatch(/paper author|co-author/i);
  });

  it("organizes a reusable professional-project catalogue with an academic archive", () => {
    expect(projectCategories.map((category) => category.slug)).toEqual([
      "sar",
      "fraud-data-science",
      "quantitative-research-trading",
      "product-data-science-experimentation",
      "nlp-llm",
      "ml-systems-data-engineering",
    ]);
    expect(projects).toHaveLength(23);
    expect(projects.find((project) => project.slug === "pathtrees")).toBeUndefined();
    expect(projects.find((project) => project.slug === "large-scale-recommendation-ranking")).toBeUndefined();
    expect(projects.find((project) => project.slug === "search-ranking-hybrid-retrieval")).toBeUndefined();
    expect(projects.find((project) => project.slug === "experimentation-platform")).toBeUndefined();
    expect(projects.find((project) => project.slug === "real-time-fraud-risk-decisioning")).toBeUndefined();
    expect(projects.find((project) => project.slug === "ecommerce-product-analytics-experimentation")?.status).toBe("completed");
    expect(projects.find((project) => project.slug === "llm-evaluation-release-platform")?.categories).toEqual(["nlp-llm", "ml-systems-data-engineering"]);
    expect(projects.find((project) => project.slug === "llm-evaluation-release-platform")?.status).toBe("completed");
    expect(projects.find((project) => project.slug === "production-fraud-risk-decision-system")?.categories).toEqual(["fraud-data-science", "ml-systems-data-engineering"]);
    expect(projects.find((project) => project.slug === "us-equity-cross-sectional-research")?.status).toBe("in-progress");
    expect(projects.filter((project) => project.status === "planned")).toHaveLength(14);
    expect(projects.filter((project) => project.status === "completed")).toHaveLength(7);
    expect(projects.find((project) => project.slug === "sar-system")?.status).toBe("live");
    expect(projects.filter((project) => project.archived)).toHaveLength(4);
    expect(projects.find((project) => project.slug === "financial-nlp-alternative-data-alpha")?.categories).toEqual(["quantitative-research-trading", "nlp-llm"]);

    const { container } = render(createElement(ProjectsPage, { language: "en" }));

    expect(screen.getByRole("link", { name: /Fraud Data Science/ }).getAttribute("href")).toBe("#projects/category/fraud-data-science");
    expect(screen.getByRole("link", { name: /US Equity Cross-Sectional Factor/ }).getAttribute("href")).toBe("#projects/project/us-equity-cross-sectional-research");
    expect(screen.getByText("In Progress")).toBeTruthy();
    expect(screen.getAllByText("Planned")).toHaveLength(16);
    expect(screen.getAllByText("Completed")).toHaveLength(5);
    expect(screen.getByText("Live Portfolio")).toBeTruthy();
    const sarLink = screen.getByRole("link", { name: /Open SAR Cosmos Lab/i });
    expect(sarLink.getAttribute("href")).toBe("https://ricky-s-gong.github.io/search-rec-ads-portfolio/en/");
    expect(sarLink.getAttribute("target")).toBe("_blank");
    expect(sarLink.getAttribute("rel")).toContain("noopener");
    expect(screen.queryByText("Capability")).toBeNull();
    expect(screen.queryByText(/Predictive and structural modeling/i)).toBeNull();
    expect(screen.getAllByRole("link", { name: /GitHub repository/i })).toHaveLength(5);
    expect(screen.queryByText(/Academic Foundations/i)).toBeNull();
    expect(container.querySelector("#category-sar .project-grid")?.classList.contains("project-grid--single")).toBe(true);
  });

  it("renders the new portfolio content in Chinese", () => {
    render(createElement(ProjectsPage, { language: "zh" }));

    expect(screen.getByText("进行中")).toBeTruthy();
    expect(screen.getAllByText("计划中")).toHaveLength(16);
    expect(screen.getAllByText("已完成")).toHaveLength(5);
    expect(screen.getByText("在线作品集")).toBeTruthy();
    expect(screen.getAllByText("欺诈数据科学")).toHaveLength(2);
  });

  it("parses shareable Projects category and detail routes", () => {
    expect(parseRoute("#projects/category/quantitative-research-trading")).toEqual({ kind: "page", page: "projects", category: "quantitative-research-trading" });
    expect(parseRoute("#projects/project/zrx-usd-time-series-analysis")).toEqual({ kind: "project", slug: "zrx-usd-time-series-analysis" });
    expect(parseRoute("#projects/project/unknown")).toEqual({ kind: "project", slug: "unknown" });
  });

  it("renders sourced project details and an unknown-project fallback", () => {
    const { unmount } = render(
      createElement(ProjectDetailPage, { language: "en", slug: "zrx-usd-time-series-analysis" }),
    );

    expect(screen.getByRole("heading", { name: /ZRX\/USD Time Series/i })).toBeTruthy();
    expect(screen.getAllByText(/ARIMA\(0,1,1\)/).length).toBeGreaterThan(0);
    expect(document.querySelector(".katex")).toBeTruthy();
    expect(document.body.textContent).not.toContain("View GitHub");
    unmount();

    render(createElement(ProjectDetailPage, { language: "zh", slug: "missing-project" }));
    expect(screen.getByRole("heading", { name: "未找到该项目" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /返回项目页/ })).toBeTruthy();
  });

  it("keeps planned project details explicitly result-free", () => {
    render(createElement(ProjectDetailPage, { language: "en", slug: "graph-fraud-account-takeover" }));

    expect(screen.getByText(/Results are not yet available/)).toBeTruthy();
    expect(document.body.textContent).not.toMatch(/Sharpe|AUC|drawdown/i);
  });

  it("renders verified completed projects and preserves their legacy detail links", () => {
    const { unmount } = render(createElement(ProjectDetailPage, { language: "en", slug: "production-fraud-risk-decision-system" }));

    expect(screen.getByRole("heading", { name: "Production Fraud Risk Decision System" })).toBeTruthy();
    expect(screen.getByText(/0\.5728/)).toBeTruthy();
    expect(screen.getByRole("link", { name: /GitHub repository/i }).getAttribute("href")).toBe("https://github.com/ziqixu22/production-fraud-risk-decision-system");
    expect(document.body.textContent).not.toContain("Results are not yet available");
    unmount();

    render(createElement(ProjectDetailPage, { language: "en", slug: "experimentation-platform" }));
    expect(screen.getByRole("heading", { name: "E-commerce Product Analytics & Experimentation Platform" })).toBeTruthy();
    expect(screen.getByText(/13,979,592/)).toBeTruthy();
  });

  it("renders the completed LLM release gate as a human-review case study", () => {
    render(createElement(ProjectDetailPage, { language: "en", slug: "llm-evaluation-release-platform" }));

    expect(screen.getByRole("heading", { name: "LLM Evaluation & Release Decision Platform" })).toBeTruthy();
    expect(screen.getAllByText(/HUMAN_REVIEW_REQUIRED/).length).toBeGreaterThan(0);
    expect(screen.getByText(/47\.44%/)).toBeTruthy();
    expect(screen.getByRole("list", { name: "Workflow" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /GitHub repository/i }).getAttribute("href")).toBe("https://github.com/ziqixu22/llm-evaluation-release-platform");
  });

  it("uses one linear technical tutorial for the fraud project", () => {
    const { unmount } = render(createElement(ProjectDetailPage, { language: "en", slug: "production-fraud-risk-decision-system" }));

    expect(screen.getByText("Build the fraud system from zero")).toBeTruthy();
    expect(screen.getByText("1. Frame fraud as a decision problem")).toBeTruthy();
    expect(screen.getByText("5. Evaluate ranking and probability quality separately")).toBeTruthy();
    expect(screen.queryByText("Learn this project step by step")).toBeNull();
    expect(document.querySelectorAll(".katex").length).toBeGreaterThan(0);
    unmount();

    render(createElement(ProjectDetailPage, { language: "en", slug: "us-equity-cross-sectional-research" }));
    expect(screen.getByText("Define the prediction target before modeling")).toBeTruthy();
  });

  it("marks the active navigation destination for assistive technology", () => {
    render(createElement(SiteHeader, { language: "en", page: "research", onLanguageChange: () => undefined }));

    expect(screen.getByRole("link", { name: "Research" }).getAttribute("aria-current")).toBe("page");
    expect(screen.getByRole("link", { name: "Home" }).getAttribute("aria-current")).toBeNull();
  });
});

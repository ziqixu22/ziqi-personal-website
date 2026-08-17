// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createElement } from "react";

import { experience, getStoredLanguage, home, pages, research, site, soa } from "./site";
import { languageStorageKey, normalizeLanguage } from "../i18n/language";
import { HomePage } from "../pages/HomePage";
import { SiteFooter } from "../components/SiteFooter";

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

  it("uses the approved bilingual About copy with compact focus statements", () => {
    expect(home.about.en.opening).toBe("Hi, I’m Ziqi Xu, and you can also call me Zoe. I am currently studying at the University of Illinois Urbana-Champaign (UIUC), double majoring in Statistics and Actuarial Science.");
    expect(home.about.en.research).toBe("My undergraduate research focuses on using quantitative methods to solve meaningful real-world problems, spanning socioeconomics and humanitarian assistance, financial risk, and mathematical modeling. At UIUC, I have worked with Prof. Angela Lyons, Prof. Xiaochen Jing, Prof. Frank Quan, and Prof. Yuliy Baryshnikov.");
    expect(home.about.en.industry).toBe("In industry, my work focuses on quantitative analysis, product pricing, loss ratio analysis, AI model training, and data visualization, with applications of statistical modeling and machine learning to real-world problems.");
    expect(home.about.en.focusLead).toBe("I am currently exploring opportunities in both Industry and Research, mainly in:");
    expect(home.about.zh.opening).toContain("徐子琦");
    expect(home.about.en.focuses).toHaveLength(3);
    expect(home.about.zh.focuses).toHaveLength(3);
    expect(home.about.en.focuses.map((focus) => focus.title)).toEqual([
      "Quantitative Research / Quantitative Analyst",
      "Modeling / Product Data Science",
      "Artificial Intelligence & Machine Learning",
    ]);
    expect(home.about.en.focuses.map((focus) => focus.description)).toEqual([
      "systematic trading, alpha and factor research, time-series and risk modeling, portfolio analysis, and market microstructure.",
      "product and growth analytics, machine learning, fraud and risk modeling, recommender systems, customer segmentation, A/B testing, and dynamic pricing.",
      "AI Agents, Large Language Models, NLP, Machine Learning Systems, and model training and evaluation.",
    ]);
    expect(home.about.en.statement).toBe("I am not afraid of challenges. What I fear more is becoming someone who stops learning and exploring. So I hope to keep learning and keep sharing.");
    expect(home.about.en.closing).toBe("Feel free to connect with me on LinkedIn. I’m always happy to exchange ideas.");
    expect(home.about.zh.closing).toBe("欢迎随时通过LinkedIn与我联系，期待与大家交流。");
    expect(home.honors[0].url).toBe("https://asrm.illinois.edu/state-farm-actuarial-science-scholarship");
    expect(home.honors[1].project?.zh).toBe("淀然一新，替塑成金 —— 淀粉赋予包装新形态");
  });

  it("presents exactly three unbolded career-interest bullets on Home", () => {
    render(createElement(HomePage, { language: "zh" }));

    const focusList = screen.getByText("目前，我正在积极探索 Industry 与 Research 的机会，主要关注：").parentElement?.querySelector("ul");
    expect(focusList).not.toBeNull();
    expect(focusList?.querySelectorAll("li")).toHaveLength(3);
    expect(focusList?.querySelector("strong")).toBeNull();
  });

  it("does not show a return-to-top link in the shared footer", () => {
    render(createElement(SiteFooter, { language: "en" }));

    expect(screen.queryByRole("link", { name: /back to top|return to top/i })).toBeNull();
  });
});

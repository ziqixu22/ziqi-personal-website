import { describe, expect, it } from "vitest";

import { experience, getStoredLanguage, home, pages, research, site, soa } from "./site";
import { languageStorageKey, normalizeLanguage } from "../i18n/language";

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

  it("uses Revision 3 headline links and the corrected IDX Exchange dates", () => {
    expect(site.headline.en.map((part) => part.text).join("")).toBe("Statistics & Actuarial Science Double Major @ UIUC");
    expect(site.headline.en[0].url).toBe("https://stat.illinois.edu/");
    expect(site.headline.en[2].url).toBe("https://asrm.illinois.edu/");
    expect(experience.find((item) => item.company === "IDX Exchange")?.dates.en).toBe("September 2024 – December 2024");
    expect(experience.find((item) => item.company === "IDX Exchange")?.dates.zh).toBe("2024年9月 – 2024年12月");
  });
});

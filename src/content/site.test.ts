import { describe, expect, it } from "vitest";

import { experience, getStoredLanguage, pages, research, site } from "./site";
import { languageStorageKey, normalizeLanguage } from "../i18n/language";

describe("portfolio content model", () => {
  it("keeps only the three Revision 2 portfolio destinations", () => {
    expect(pages.map((page) => page.slug)).toEqual([
      "home",
      "experience",
      "research-projects",
    ]);
  });

  it("uses a unifying quantitative narrative", () => {
    expect(site.positioning).toMatch(/statistics, computation, and quantitative thinking/i);
  });

  it("keeps the resume request-based rather than downloadable", () => {
    expect(site.resumeNote.en).toBe("Resume available upon request.");
  });

  it("uses English unless a supported language is explicitly selected", () => {
    expect(normalizeLanguage("zh")).toBe("zh");
    expect(normalizeLanguage("de")).toBe("en");
    expect(languageStorageKey).toBe("ziqi-site-language");
    expect(getStoredLanguage({ getItem: () => "zh" } as Pick<Storage, "getItem">)).toBe("zh");
  });

  it("uses supplied logo assets and only documented research links", () => {
    expect(experience.every((item) => item.logoSrc?.startsWith("/logos/"))).toBe(true);
    expect(research[0].institutionUrl).toBe("https://www.ncsa.illinois.edu/");
    expect(research[1].advisors[2].url).toBeUndefined();
  });

  it("keeps contact actions on Home rather than a dedicated page", () => {
    expect(pages.map((page) => String(page.slug))).not.toContain("contact");
    expect(site.email).toMatch(/@/);
    expect(site.github).toContain("github.com");
  });
});

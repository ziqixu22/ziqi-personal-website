import type { Language } from "../content/types";
export const languageStorageKey = "ziqi-site-language";
export function normalizeLanguage(value: string | null | undefined): Language { return value === "zh" ? "zh" : "en"; }
export function getStoredLanguage(storage?: Pick<Storage, "getItem">): Language { return normalizeLanguage(storage?.getItem(languageStorageKey)); }

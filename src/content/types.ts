export type Language = "en" | "zh";
export type LocalizedText = Record<Language, string>;
export const localize = (value: LocalizedText, language: Language) => value[language];

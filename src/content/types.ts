export type Language = "en" | "zh";
export type LocalizedText = Record<Language, string>;
export type ProjectStatus = "completed" | "in-progress" | "planned" | "live";
export type ProjectCategory =
  | "sar"
  | "fraud-data-science"
  | "quantitative-research-trading"
  | "product-data-science-experimentation"
  | "nlp-llm"
  | "ml-systems-data-engineering";
export type ProjectLink = { label: LocalizedText; url: string };
export type ProjectFormula = {
  label: LocalizedText;
  latex: string;
  explanation: LocalizedText;
};
export type ProjectDetailSection = {
  title: LocalizedText;
  body: LocalizedText[];
  formulas?: ProjectFormula[];
};
export type ProjectVisualKind = "equity" | "fraud" | "fraud-graph" | "monitoring" | "asset-pricing" | "stat-arb" | "cta" | "volatility" | "execution" | "experiment" | "uplift" | "causal" | "recommendation" | "search" | "rag" | "language" | "pipeline" | "graph" | "time" | "regression" | "cohort" | "tbd";
type ProjectBase = {
  slug: string;
  title: LocalizedText;
  status: ProjectStatus;
  categories: ProjectCategory[];
  description: LocalizedText;
  methods: string[];
  links: ProjectLink[];
  visualKind: ProjectVisualKind;
  archived?: boolean;
};

export type InternalProjectItem = ProjectBase & {
  destination: "internal";
  detailSections: ProjectDetailSection[];
};

export type ExternalProjectItem = ProjectBase & {
  destination: "external";
  externalUrl: string;
  previewAlt: LocalizedText;
};

export type ProjectItem = InternalProjectItem | ExternalProjectItem;
export const localize = (value: LocalizedText, language: Language) => value[language];

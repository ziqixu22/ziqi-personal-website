import type { PageSlug } from "../content/site";
import type { ProjectCategory } from "../content/types";

const categories = new Set<ProjectCategory>([
  "sar",
  "fraud-data-science",
  "quantitative-research-trading",
  "product-data-science-experimentation",
  "nlp-llm",
  "ml-systems-data-engineering",
]);

const pages = new Set<PageSlug>(["home", "research", "projects"]);

export type AppRoute =
  | { kind: "page"; page: PageSlug; category?: ProjectCategory }
  | { kind: "project"; slug: string };

export function parseRoute(hash: string): AppRoute {
  const parts = hash.replace(/^#/, "").split("/").filter(Boolean);

  if (parts[0] === "projects" && parts[1] === "project" && parts[2]) {
    return { kind: "project", slug: parts[2] };
  }

  if (parts[0] === "projects" && parts[1] === "category" && categories.has(parts[2] as ProjectCategory)) {
    return { kind: "page", page: "projects", category: parts[2] as ProjectCategory };
  }

  return { kind: "page", page: pages.has(parts[0] as PageSlug) ? parts[0] as PageSlug : "home" };
}

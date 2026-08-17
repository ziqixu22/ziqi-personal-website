import { localize, projectCategories, type Language } from "../content/site";
import { PageHeading } from "../components/PageHeading";

export function ProjectsPage({ language }: { language: Language }) {
  return <><PageHeading label={language === "en" ? "Projects" : "项目"} title={language === "en" ? "Selected projects." : "精选项目。"}><p>{language === "en" ? "Technical directions and project work that are ready to share." : "适合展示的技术方向与项目工作。"}</p></PageHeading><section className="projects-section"><h2>{language === "en" ? "Selected projects" : "精选项目"}</h2>{projectCategories.map((category) => <div className="project-empty" key={category.title.en}><h3>{localize(category.title, language)}</h3><p>{localize(category.description, language)}</p></div>)}</section></>;
}

import { useEffect } from "react";
import { projectCategories, projects, type Language, type ProjectCategory } from "../content/site";
import { PageHeading } from "../components/PageHeading";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsPage({ language, category }: { language: Language; category?: ProjectCategory }) {
  useEffect(() => {
    if (!category) return;
    requestAnimationFrame(() => document.getElementById(`category-${category}`)?.scrollIntoView({ block: "start" }));
  }, [category]);

  return <>
    <PageHeading title={language === "en" ? "Projects" : "项目"}><p>{language === "en" ? "Selected work organized by the methods and systems I use to investigate real questions." : "按用于研究真实问题的方法与系统组织的代表项目。"}</p></PageHeading>
    <nav className="project-category-nav" aria-label={language === "en" ? "Project categories" : "项目分类"}>{projectCategories.map((item) => <a key={item.slug} href={`#projects/category/${item.slug}`} aria-current={category === item.slug ? "location" : undefined}>{item.title[language]}</a>)}</nav>
    <section className="projects-section">
      {projectCategories.map((item) => {
        const categoryProjects = projects.filter((project) => !project.archived && project.categories.includes(item.slug));
        return <section className="project-group" id={`category-${item.slug}`} key={item.slug}><div className="project-group-heading"><h2>{item.title[language]}</h2></div><div className={`project-grid${categoryProjects.length === 1 ? " project-grid--single" : ""}`}>{categoryProjects.map((project) => <ProjectCard key={project.slug} project={project} language={language} />)}</div></section>;
      })}
    </section>
  </>;
}

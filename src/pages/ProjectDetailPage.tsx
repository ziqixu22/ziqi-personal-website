import { projectCategories, projects, type Language } from "../content/site";
import { MathFormula } from "../components/MathFormula";

const statusLabel = { completed: { en: "Completed", zh: "已完成" }, "in-progress": { en: "In Progress", zh: "进行中" }, planned: { en: "Planned", zh: "规划中" }, live: { en: "Live Portfolio", zh: "在线作品集" } };

export function ProjectDetailPage({ language, slug }: { language: Language; slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <section className="project-not-found"><p className="section-label">404</p><h1>{language === "en" ? "Project not found" : "未找到该项目"}</h1><p>{language === "en" ? "This project link is not available." : "该项目链接不可用。"}</p><a href="#projects">{language === "en" ? "Back to Projects" : "返回项目页"} ←</a></section>;
  if (project.destination === "external") return <section className="project-not-found"><p className="section-label">{statusLabel.live[language]}</p><h1>{project.title[language]}</h1><p>{project.description[language]}</p><a href={project.externalUrl} target="_blank" rel="noopener noreferrer">{language === "en" ? "Open live portfolio" : "打开在线作品集"} ↗</a></section>;
  const categories = projectCategories.filter((item) => project.categories.includes(item.slug));
  const primaryCategory = categories[0];
  const peers = projects.filter((item) => !item.archived && item.slug !== project.slug && item.categories.some((category) => project.categories.includes(category)));
  return <article className="project-detail">
    <a className="back-link" href={primaryCategory ? `#projects/category/${primaryCategory.slug}` : "#projects"}>← {language === "en" ? "Back to Projects" : "返回项目页"}</a>
    <header className={`project-detail-header project-${project.status}`}><p className="section-label">{categories.map((category) => category.title[language]).join(" · ")}</p><p className="project-status">{statusLabel[project.status][language]}</p><h1>{project.title[language]}</h1><p>{project.description[language]}</p><ul className="project-tags" aria-label={language === "en" ? "Methods" : "方法标签"}>{project.methods.map((method) => <li key={method}>{method}</li>)}</ul><div className="project-links">{project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label[language]} <span aria-hidden="true">↗</span></a>)}</div></header>
    <div className="project-detail-body">{project.detailSections.map((section) => <section key={section.title.en}><h2>{section.title[language]}</h2>{section.body.map((paragraph) => <p key={paragraph.en}>{paragraph[language]}</p>)}{section.formulas?.map((item) => <MathFormula key={item.latex} formula={item} language={language} />)}</section>)}</div>
    <footer className="project-detail-footer">{primaryCategory ? <a href={`#projects/category/${primaryCategory.slug}`}>{language === "en" ? `Explore ${primaryCategory.title.en}` : `浏览${primaryCategory.title.zh}`} →</a> : <a href="#projects">{language === "en" ? "Back to Projects" : "返回项目页"}</a>}{peers.length ? <span>{language === "en" ? peers.map((item) => item.title.en).join(" · ") : peers.map((item) => item.title.zh).join(" · ")}</span> : null}</footer>
  </article>;
}

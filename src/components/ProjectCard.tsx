import { localize, type Language, type ProjectItem } from "../content/site";
import { ProjectVisual } from "./ProjectVisual";

const statusLabel = {
  completed: { en: "Completed", zh: "已完成" },
  "in-progress": { en: "In Progress", zh: "进行中" },
  planned: { en: "Planned", zh: "计划中" },
  live: { en: "Live Portfolio", zh: "在线作品集" },
} as const;

export function ProjectCard({ project, language }: { project: ProjectItem; language: Language }) {
  const title = localize(project.title, language);
  const isExternal = project.destination === "external";
  const href = isExternal ? project.externalUrl : `#projects/project/${project.slug}`;
  const action = isExternal
    ? language === "en" ? "Open SAR Cosmos Lab" : "打开 SAR Cosmos Lab"
    : language === "en" ? "View project" : "查看项目";

  return <article className={`project-card project-${project.status}`}>
    <a className="project-card-detail-link" href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} aria-label={language === "en" ? `${action}: ${title}` : `${action}：${title}`} />
    <ProjectVisual kind={project.visualKind} language={language} previewAlt={isExternal ? project.previewAlt[language] : undefined} />
    <div className="project-card-content"><div className="project-card-topline"><span className="project-status">{statusLabel[project.status][language]}</span><span className="project-status-mark" aria-hidden="true" /></div>
    <h2>{title}</h2><p>{localize(project.description, language)}</p>
    <ul className="project-tags" aria-label={language === "en" ? "Methods" : "方法标签"}>{project.methods.map((method) => <li key={method}>{method}</li>)}</ul>
    {project.links.length > 0 ? <div className="project-links">{project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{localize(link.label, language)} <span aria-hidden="true">↗</span></a>)}</div> : null}</div>
    <span className="project-card-action" aria-hidden="true">{action} <b>→</b></span>
  </article>;
}

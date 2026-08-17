import { useState } from "react";
import { localize, type Language, type LinkedName, type LocalizedText } from "../content/site";

type Entry = {
  role: LocalizedText;
  dates: LocalizedText;
  institution: LinkedName;
  collaborators?: LinkedName;
  advisors: LinkedName[];
  logoSrc: string;
  logoAlt: string;
  topic: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText;
  projectUrl?: string;
};

function LinkedText({ item }: { item: LinkedName }) {
  return item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.name} <span aria-hidden="true">↗</span></a> : <>{item.name}</>;
}

export function ResearchEntry({ entry, language }: { entry: Entry; language: Language }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="research-entry">
      <div className="research-main">
        <div className="research-topline"><h2>{localize(entry.role, language)}</h2><time>{localize(entry.dates, language)}</time></div>
        <p className="institution"><LinkedText item={entry.institution} />{entry.collaborators ? <> <span aria-hidden="true">·</span> <LinkedText item={entry.collaborators} /></> : null}</p>
        <p className="metadata"><b>{language === "en" ? "Supervisors" : "指导老师"}:</b> {entry.advisors.map((advisor, index) => <span key={advisor.name}><LinkedText item={advisor} />{index < entry.advisors.length - 1 ? " · " : ""}</span>)}</p>
        <p className="topic"><b>{language === "en" ? "Topic" : "课题"}:</b> {localize(entry.topic, language)}</p>
        <p className="research-summary">{localize(entry.summary, language)}</p>
        {expanded ? <p className="research-details">{localize(entry.details, language)}</p> : null}
        <button className="text-button" type="button" onClick={() => setExpanded((value) => !value)}>{expanded ? (language === "en" ? "Show less" : "收起") : (language === "en" ? "Read more" : "阅读更多")} <span>→</span></button>
        {entry.projectUrl ? <a className="project-link" href={entry.projectUrl} target="_blank" rel="noreferrer">{language === "en" ? "Project reference" : "项目参考"} ↗</a> : null}
      </div>
      <div className="research-brand">
        <div className="logo-frame research-logo"><img src={entry.logoSrc} alt={entry.logoAlt} /></div>
      </div>
    </article>
  );
}

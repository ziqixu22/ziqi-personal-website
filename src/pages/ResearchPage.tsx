import { home, localize, research, type Language } from "../content/site";
import { PageHeading } from "../components/PageHeading";
import { ResearchEntry } from "../components/ResearchEntry";

export function ResearchPage({ language }: { language: Language }) {
  return <><PageHeading title={language === "en" ? "Research" : "研究"}><p>{language === "en" ? "Quantitative research across markets, risk, and applied data science." : "横跨市场、风险与应用数据科学的量化研究。"}</p></PageHeading><section className="research-section"><div className="section-title"><h2>{language === "en" ? "Research experiences" : "科研经历"}</h2></div>{research.map((entry) => <ResearchEntry key={entry.topic.en} entry={entry} language={language} />)}<div className="section-title research-subsection-heading"><h2>{language === "en" ? "Teaching Experience" : "教学经历"}</h2></div>{home.teaching.map((item) => <article className="research-entry teaching-entry" key={item.role.en}><div className="research-main"><div className="research-topline"><h2>{localize(item.role, language)}</h2></div><p className="institution">{item.institution}</p></div><div className="research-brand"><time>{localize(item.dates, language)}</time></div></article>)}</section></>;
}

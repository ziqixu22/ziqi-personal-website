import { experience, localize, type Language } from "../content/site";
import { PageHeading } from "../components/PageHeading";

export function ExperiencePage({ language }: { language: Language }) {
  return (
    <>
      <PageHeading label={language === "en" ? "Experience" : "经历"} title={language === "en" ? "Professional experience." : "职业经历。"}>
        <p>{language === "en" ? "A chronological record of work across data science, actuarial analysis, and technology." : "按时间呈现数据科学、精算分析与技术领域的职业经历。"}</p>
      </PageHeading>
      <section className="experience-list">
        {experience.map((item) => (
          <article key={item.company} className="experience-row">
            <div className="logo-frame experience-logo"><img src={item.logoSrc} alt={`${item.company} logo`} /></div>
            <div>
              <h2>{item.company}</h2>
              <p>{localize(item.role, language)}</p>
              {item.team ? <p className="muted">{item.team}</p> : null}
            </div>
            <div className="experience-meta"><time>{localize(item.dates, language)}</time><span>{item.location}</span></div>
          </article>
        ))}
      </section>
      <p className="content-note">{language === "en" ? "Role descriptions will be added when they are ready to share." : "岗位说明将在适合公开时补充。"}</p>
    </>
  );
}

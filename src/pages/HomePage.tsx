import { home, localize, site, soa, type Language } from "../content/site";
import { ExperienceList } from "../components/ExperienceList";

function SocialIcon({ type }: { type: "email" | "linkedin" | "github" }) {
  if (type === "linkedin") return <span className="social-icon linkedin-icon" aria-hidden="true">in</span>;
  if (type === "github") return <span className="social-icon github-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></span>;
  return <span className="social-icon email-icon" aria-hidden="true">✉</span>;
}

export function HomePage({ language }: { language: Language }) {
  return (
    <>
      <section className="home-hero">
        <div className="home-portrait-column">
          <img className="profile-photo" src="profile-ziqi.png" alt={language === "en" ? "Ziqi Xu" : "Ziqi Xu 的照片"} />
          <div className="social-links" aria-label={language === "en" ? "Contact links" : "联系链接"}>
            <a href={`mailto:${site.email}`}><SocialIcon type="email" /><span>Email</span></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer"><SocialIcon type="linkedin" /><span>LinkedIn</span></a>
            <a href={site.github} target="_blank" rel="noreferrer"><SocialIcon type="github" /><span>GitHub</span></a>
          </div>
        </div>
        <div className="home-intro">
          <p className="section-label">{localize(home.label, language)}</p>
          <h1>{site.name}</h1>
          <p className="role">{site.headline[language].map((part) => part.url ? <a key={part.text} href={part.url} target="_blank" rel="noreferrer">{part.text}</a> : <span key={part.text}>{part.text}</span>)}</p>
          <div className="intro">{home.intro.map((paragraph) => <p key={paragraph.en}>{localize(paragraph, language)}</p>)}</div>
        </div>
      </section>

      <section className="home-profile-section industry-section">
        <div className="section-title"><h2>{language === "en" ? "Industry Experience" : "行业经历"}</h2></div>
        <ExperienceList language={language} />
      </section>

      <section className="home-profile-section teaching-section">
        <div className="section-title"><h2>{language === "en" ? "Teaching & Academic Service" : "教学与学术服务"}</h2></div>
        <div className="teaching-list">
          {home.teaching.map((item) => <article className="teaching-row" key={item.role.en}><div><h3>{localize(item.role, language)}</h3><p>{item.institution}</p></div><time>{localize(item.dates, language)}</time></article>)}
        </div>
      </section>

      <section className="home-profile-section honors-section">
        <div className="section-title"><h2>{language === "en" ? "Honors & Awards" : "荣誉与奖项"}</h2></div>
        <div className="honors-list">{home.honors.map((honor) => <article key={honor.title.en} className="honor-row"><time>{honor.year}</time><div><h3>{honor.url ? <a href={honor.url} target="_blank" rel="noreferrer">{localize(honor.title, language)} ↗</a> : localize(honor.title, language)}</h3>{honor.award ? <p className="honor-award">{localize(honor.award, language)}</p> : null}{honor.project ? <p>{language === "en" ? "Project: " : "项目名称："}{localize(honor.project, language)}</p> : null}{honor.secondaryLink ? <a className="honor-link" href={honor.secondaryLink.url} target="_blank" rel="noreferrer">{localize(honor.secondaryLink.label, language)} ↗</a> : null}</div></article>)}</div>
      </section>

      <section className="home-profile-section soa-section">
        <div className="soa-heading"><img src={soa.logoSrc} alt="Society of Actuaries logo" /><div><p className="section-label">{localize(soa.subtitle, language)}</p><h2><a href={soa.url} target="_blank" rel="noreferrer">{localize(soa.name, language)} ↗</a></h2></div></div>
        <div className="exam-grid">{soa.exams.map((exam) => <article className="exam-row" key={exam.name}><h3>{exam.name}</h3><p>{localize(exam.issued, language)}</p></article>)}</div>
      </section>
    </>
  );
}

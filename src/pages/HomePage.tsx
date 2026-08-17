import { home, localize, site, type Language } from "../content/site";

export function HomePage({ language }: { language: Language }) {
  const linkedinAvailable = site.linkedin !== "#";

  return (
    <>
      <section className="home-hero">
        <div className="home-portrait-column">
          <img className="profile-photo" src="/profile-ziqi.png" alt={language === "en" ? "Ziqi Xu" : "Ziqi Xu 的照片"} />
          <div className="social-links" aria-label={language === "en" ? "Contact links" : "联系链接"}>
            <a href={`mailto:${site.email}`}><span aria-hidden="true">✉</span>Email</a>
            {linkedinAvailable ? <a href={site.linkedin} target="_blank" rel="noreferrer"><span aria-hidden="true">in</span>LinkedIn</a> : <span className="social-link-disabled" title="LinkedIn URL to be added"><span aria-hidden="true">in</span>LinkedIn</span>}
            <a href={site.github} target="_blank" rel="noreferrer"><span aria-hidden="true">⌘</span>GitHub</a>
          </div>
        </div>
        <div className="home-intro">
          <p className="section-label">{localize(home.label, language)}</p>
          <h1>{site.name}</h1>
          <p className="role">{localize(site.role, language)}</p>
          <div className="intro">{home.intro.map((paragraph) => <p key={paragraph.en}>{localize(paragraph, language)}</p>)}</div>
          <p className="resume-note">{localize(site.resumeNote, language)}</p>
        </div>
      </section>

      <section className="home-grid">
        <div>
          <p className="section-label">{language === "en" ? "Areas of interest" : "兴趣方向"}</p>
          <ul className="plain-list">{home.focus.map((item) => <li key={item.en}>{localize(item, language)}</li>)}</ul>
        </div>
        <div>
          <p className="section-label">{language === "en" ? "Education" : "教育背景"}</p>
          <h2>{home.education.school}</h2>
          <p>{localize(home.education.degree, language)}</p>
          <p className="muted">{localize(home.education.graduation, language)}</p>
        </div>
      </section>

      <section className="home-secondary">
        <div>
          <p className="section-label">{language === "en" ? "Teaching & academic service" : "教学与学术服务"}</p>
          {home.service.map((item) => <p key={item.en}>{localize(item, language)}</p>)}
        </div>
        <div>
          <p className="section-label">{language === "en" ? "Selected honors" : "精选荣誉"}</p>
          <ul className="plain-list">{home.honors.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <p className="section-label">{language === "en" ? "Beyond work" : "工作之外"}</p>
          <p>{localize(home.beyond, language)}</p>
        </div>
      </section>
    </>
  );
}

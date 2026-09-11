import { credentials, home, localize, site, type Language } from "../content/site";
import { SelectedExperienceList } from "../components/SelectedExperienceList";

function SocialIcon({ type }: { type: "email" | "linkedin" | "github" }) {
  if (type === "linkedin") return <span className="social-icon linkedin-icon" aria-hidden="true">in</span>;
  if (type === "github") return <span className="social-icon github-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></span>;
  return <span className="social-icon email-icon" aria-hidden="true">✉</span>;
}

function AboutCopy({ language }: { language: Language }) {
  const content = home.about[language];
  return <div className="about-longform">
    <p>{content.intro}</p>
    <div className="about-interests"><p>{content.interestsIntro}</p><div>{content.interests.map((interest) => <article key={interest.title}><h2>{interest.title}</h2><p>{interest.body}</p></article>)}</div></div>
  </div>;
}

export function HomePage({ language }: { language: Language }) {
  return <>
    <section className="home-hero">
      <div className="hero-card home-profile-card">
        <img className="profile-photo" src="profile-ziqi.png" alt={language === "en" ? "Ziqi Xu" : "Ziqi Xu 的照片"} />
        <div className="social-links" aria-label={language === "en" ? "Contact links" : "联系链接"}>
          <a href={`mailto:${site.email}`}><SocialIcon type="email" /><span>Email</span></a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon type="linkedin" /><span>LinkedIn</span></a>
          <a href={site.github} target="_blank" rel="noopener noreferrer"><SocialIcon type="github" /><span>GitHub</span></a>
        </div>
        <div className="selected-experience"><p className="card-kicker">{language === "en" ? "Selected Experience" : "精选经历"}</p><SelectedExperienceList language={language} /></div>
      </div>
      <div className="hero-card home-about-card">
        <h1>{localize(home.label, language)}</h1>
        <AboutCopy language={language} />
      </div>
    </section>

    <section className="home-cta-grid" aria-label={language === "en" ? "Explore my work" : "探索我的工作"}>
      <a href="#research"><span><b>{language === "en" ? "Explore Research" : "探索研究"}</b><small>{language === "en" ? "Applied work across markets, risk, and data science." : "涵盖市场、风险与数据科学的应用研究。"}</small></span><span aria-hidden="true">↗</span></a>
      <a href="#projects"><span><b>{language === "en" ? "View Projects" : "查看项目"}</b><small>{language === "en" ? "Reproducible modeling and analytics projects." : "可复现的建模与分析项目。"}</small></span><span aria-hidden="true">↗</span></a>
    </section>

    <section className="credentials-section">
      <div className="section-title"><p className="section-label">{language === "en" ? "Evidence" : "能力证明"}</p><h2>{language === "en" ? "Credentials & Recognition" : "资质与认可"}</h2></div>
      <div className="credentials-grid">
        <div className="credential-group credential-awards"><h3>{language === "en" ? "Awards" : "奖项"}</h3><div className="compact-awards">{credentials.awards.map((award) => <article key={award.title.en}><time>{award.year}</time><div><h4>{award.url ? <a href={award.url} target="_blank" rel="noopener noreferrer">{localize(award.title, language)} <span aria-hidden="true">↗</span></a> : localize(award.title, language)}</h4>{award.award ? <p>{localize(award.award, language)}</p> : null}{award.secondaryLink ? <a className="credential-link" href={award.secondaryLink.url} target="_blank" rel="noopener noreferrer">{localize(award.secondaryLink.label, language)} <span aria-hidden="true">↗</span></a> : null}</div></article>)}</div></div>
        <div className="credential-group"><h3>{language === "en" ? "Actuarial Exams" : "精算考试"}</h3><div className="exam-chips">{credentials.exams.map((exam) => <span key={exam.name}><b>{exam.name.replace("SOA ", "")}</b><small>{localize(exam.issued, language).replace(language === "en" ? "Issued: " : "通过时间：", "")}</small></span>)}</div></div>
        <div className="credential-group research-contribution"><h3>{language === "en" ? "Research Contribution" : "研究贡献"}</h3><p className="contribution-role">{localize(credentials.researchContribution.title, language)}</p><h4>{credentials.researchContribution.work}</h4><p>{localize(credentials.researchContribution.description, language)}</p><a className="credential-link" href={credentials.researchContribution.url} target="_blank" rel="noopener noreferrer">{language === "en" ? "View paper" : "查看论文"} <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section className="teaching-section compact-section">
      <div className="section-title"><h2>{language === "en" ? "Teaching & Academic Service" : "教学与学术服务"}</h2></div>
      <div className="teaching-list">{home.teaching.map((item) => <article className="teaching-row" key={item.role.en}><div><h3>{localize(item.role, language)}</h3><p>{item.institution}</p></div><time>{localize(item.dates, language)}</time></article>)}</div>
    </section>
  </>;
}

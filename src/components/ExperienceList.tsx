import { experience, localize, type Language } from "../content/site";

export function ExperienceList({ language }: { language: Language }) {
  return (
    <div className="experience-list">
      {[...experience].sort((left, right) => right.order - left.order).map((item) => (
        <article key={item.company} className="experience-row">
          <div className="logo-frame experience-logo"><img src={item.logoSrc} alt={`${item.company} logo`} /></div>
          <div>
            <h3>{item.company}</h3>
            <p>{localize(item.role, language)}</p>
            {item.team ? <p className="muted">{item.team}</p> : null}
          </div>
          <div className="experience-meta"><time>{localize(item.dates, language)}</time><span>{item.location}</span></div>
        </article>
      ))}
    </div>
  );
}

import { localize, selectedExperience, type Language } from "../content/site";

export function SelectedExperienceList({ language }: { language: Language }) {
  return <div className="selected-experience-list">{selectedExperience.map((item) => <article className="selected-experience-item" key={item.company}>
    <div className="logo-frame selected-experience-logo"><img src={item.logoSrc} alt={`${item.company} logo`} /></div>
    <div className="selected-experience-copy"><h3>{item.company}</h3><p>{localize(item.role, language)}</p></div>
    <time>{item.year}</time>
  </article>)}</div>;
}

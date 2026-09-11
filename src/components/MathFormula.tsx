import katex from "katex";
import "katex/dist/katex.min.css";

import type { Language, ProjectFormula } from "../content/site";

export function MathFormula({ formula, language }: { formula: ProjectFormula; language: Language }) {
  let html = "";
  try { html = katex.renderToString(formula.latex, { displayMode: true, throwOnError: true }); } catch { html = ""; }
  return <figure className="math-formula"><figcaption>{formula.label[language]}</figcaption>{html ? <div className="math-formula-rendered" dangerouslySetInnerHTML={{ __html: html }} /> : <code>{formula.latex}</code>}<p>{formula.explanation[language]}</p></figure>;
}

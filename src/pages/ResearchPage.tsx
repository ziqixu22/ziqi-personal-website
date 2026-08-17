import { research, type Language } from "../content/site";
import { PageHeading } from "../components/PageHeading";
import { ResearchEntry } from "../components/ResearchEntry";

export function ResearchPage({ language }: { language: Language }) {
  return <><PageHeading label={language === "en" ? "Research" : "科研"} title={language === "en" ? "Research grounded in practical questions." : "以现实问题为基础的科研。"}><p>{language === "en" ? "Research in humanitarian assistance, financial risk, and mathematical structure." : "涵盖人道主义援助、金融风险和数学结构的科研工作。"}</p></PageHeading><section className="research-section"><div className="section-title"><h2>{language === "en" ? "Research experiences" : "科研经历"}</h2></div>{research.map((entry) => <ResearchEntry key={entry.topic.en} entry={entry} language={language} />)}</section></>;
}

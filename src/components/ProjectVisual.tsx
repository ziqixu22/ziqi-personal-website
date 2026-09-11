import type { Language, ProjectVisualKind } from "../content/site";

const labels: Record<ProjectVisualKind, Record<Language, string>> = {
  equity: { en: "Cross-sectional ranking study", zh: "横截面排序研究" },
  fraud: { en: "Risk decision workflow", zh: "风险决策工作流" },
  "fraud-graph": { en: "Connected-risk network", zh: "关联风险网络" },
  monitoring: { en: "Model monitoring workflow", zh: "模型监控工作流" },
  "asset-pricing": { en: "Model comparison design", zh: "模型比较设计" },
  "stat-arb": { en: "Dynamic relative-value study", zh: "动态相对价值研究" },
  cta: { en: "Multi-asset regime design", zh: "多资产状态设计" },
  volatility: { en: "Volatility and tail-risk design", zh: "波动率与尾部风险设计" },
  execution: { en: "Alpha-to-execution workflow", zh: "从 Alpha 到执行的工作流" },
  experiment: { en: "Treatment and control design", zh: "处理组与对照组设计" },
  uplift: { en: "Incrementality study", zh: "增量效应研究" },
  graph: { en: "Network structure study", zh: "网络结构研究" },
  time: { en: "Time-series diagnostics", zh: "时间序列诊断" },
  regression: { en: "Regression diagnostics", zh: "回归诊断" },
  cohort: { en: "Cohort pipeline", zh: "队列管道" },
  pipeline: { en: "Planned data workflow", zh: "规划数据工作流" },
  language: { en: "Planned evaluation", zh: "规划评估" },
  causal: { en: "Planned causal design", zh: "规划因果设计" },
  recommendation: { en: "Retrieval to ranking architecture", zh: "召回到排序架构" },
  search: { en: "Hybrid retrieval architecture", zh: "混合召回架构" },
  rag: { en: "Grounded retrieval workflow", zh: "有依据的检索工作流" },
  tbd: { en: "Scope TBD", zh: "范围待定" },
};

export function ProjectVisual({ kind, language, previewAlt }: { kind: ProjectVisualKind; language: Language; previewAlt?: string }) {
  if (previewAlt) {
    return <div className="project-visual project-external-preview" role="img" aria-label={previewAlt}>
      <iframe title={previewAlt} src="https://ricky-s-gong.github.io/search-rec-ads-portfolio/en/" loading="lazy" tabIndex={-1} />
      <span className="external-preview-label">SAR COSMOS LAB</span>
    </div>;
  }

  return <div className={`project-visual visual-${kind}`} role="img" aria-label={labels[kind][language]}>
    <span>{labels[kind][language]}</span><i /><i /><i />
  </div>;
}

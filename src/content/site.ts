import { getStoredLanguage } from "../i18n/language";
import { localize } from "./types";
import type { Language, LocalizedText, ProjectCategory, ProjectDetailSection, ProjectItem } from "./types";

export { getStoredLanguage, localize };
export type { Language, LocalizedText, ProjectCategory, ProjectDetailSection, ProjectFormula, ProjectItem, ProjectLink, ProjectStatus, ProjectVisualKind } from "./types";

export type PageSlug = "home" | "research" | "projects";
export type LinkedName = { name: string; url?: string };
const text = (en: string, zh: string): LocalizedText => ({ en, zh });

export const site = {
  name: "Ziqi Xu",
  positioning:
    "Using statistics, computation, and quantitative thinking to turn complex real-world questions into clear, practical insight.",
  email: "xuziqi2003@gmail.com",
  github: "https://github.com/ziqixu22",
  linkedin: "https://www.linkedin.com/in/ziqi12/",
};

export const pages: { slug: PageSlug; label: LocalizedText }[] = [
  { slug: "home", label: text("Home", "首页") },
  { slug: "research", label: text("Research", "科研") },
  { slug: "projects", label: text("Projects", "项目") },
];

export const home = {
  label: text("About Me", "关于我"),
  about: {
    en: {
      intro: "Hi, I’m Ziqi Xu, and you can call me Zoe. I’m an undergraduate at the University of Illinois Urbana-Champaign (UIUC), pursuing a double major in Statistics and Actuarial Science.",
      interestsIntro: "I am currently exploring opportunities in industry and research, with particular interest in:",
      interests: [
        { title: "Quantitative Research / Quantitative Analyst", body: "Systematic trading strategies, alpha and factor research, time-series and risk modeling, portfolio analysis, and market microstructure." },
        { title: "Modeling / Product Data Science", body: "Business growth and product analytics, machine learning, fraud detection and risk modeling, recommendation systems, user and customer segmentation, experimental design / A/B testing, and dynamic pricing." },
        { title: "Artificial Intelligence & Machine Learning", body: "AI agents, large language models, NLP, machine learning systems, model training and evaluation, and applying AI to real business and research problems." },
      ],
    },
    zh: {
      intro: "你好，我是徐子琦，也可以叫我 Zoe。我目前就读于伊利诺伊大学厄巴纳-香槟分校（UIUC），本科双专业为统计学与精算学。",
      interestsIntro: "目前，我正在积极探索 Industry 与 Research 的机会，主要关注：",
      interests: [
        { title: "Quantitative Research / Quantitative Analyst", body: "系统化交易策略、Alpha Research、因子研究、时间序列建模、风险建模、投资组合分析与市场微观结构。" },
        { title: "Modeling / Product Data Science", body: "商业增长与产品分析、Machine Learning、欺诈检测与风险建模、推荐系统、用户与客户细分、实验设计 / A/B Testing 与动态定价。" },
        { title: "Artificial Intelligence & Machine Learning", body: "AI Agents、Large Language Models、NLP、Machine Learning Systems、模型训练与评估，以及 AI 在真实业务与研究问题中的应用。" },
      ],
    },
  },
  teaching: [
    { institution: "University of Illinois Urbana-Champaign", role: text("ASRM 402 Grader", "ASRM 402 课程评分员"), dates: text("August 2026 – December 2026", "2026 年 8 月 – 2026 年 12 月") },
    { institution: "University of Illinois Urbana-Champaign", role: text("STAT 400 Course Assistant", "STAT 400 课程助教 / Course Assistant"), dates: text("August 2026 – December 2026", "2026 年 8 月 – 2026 年 12 月") },
  ],
  honors: [
    { title: text("State Farm Actuarial Science Scholarship", "State Farm 精算科学奖学金"), year: "2026", url: "https://asrm.illinois.edu/state-farm-actuarial-science-scholarship" },
    {
      title: text("China Undergraduate Life Science Contest (2022, Entrepreneurship)", "全国大学生生命科学竞赛（2022，创新创业类）"),
      award: text("National Grand Prize (Highest Award)", "决赛特等奖（最高奖）"),
      project: text("Reinventing Starch — Giving Packaging a New Form through Sustainable Plastic Replacement", "淀然一新，替塑成金 —— 淀粉赋予包装新形态"),
      year: "2022",
      url: "https://www.culsc.cn/#/Home",
      secondaryLink: { label: text("Official Award Announcement", "获奖通报"), url: "https://mp.weixin.qq.com/s/y4pRHOoEJl48sLOfsGX1hw" },
    },
    {
      title: text("The 8th China International College Students’ “Internet+” Innovation and Entrepreneurship Competition", "第八届中国国际“互联网+”大学生创新创业大赛"),
      award: text("National Bronze Award", "全国铜奖"),
      project: text("Super Starch — Leading the New Future of Plastics Replacement Industry", "超级淀粉——引领塑料替代产业的新未来"),
      year: "2022",
      url: "https://cy.ncss.cn/en/",
      secondaryLink: { label: text("View Certificate", "查看证书"), url: "awards/internet-plus-national-bronze-certificate.pdf" },
    },
  ],
};

export const soa = {
  name: text("Society of Actuaries", "美国精算师协会 Society of Actuaries"),
  subtitle: text("Actuarial Exams Passed", "已通过精算考试"),
  url: "https://www.soa.org/",
  logoSrc: "logos/soa.png",
  exams: [
    { name: "SOA Exam P", issued: text("Issued: March 2025", "通过时间：2025年3月") },
    { name: "SOA Exam FM", issued: text("Issued: May 2025", "通过时间：2025年5月") },
    { name: "SOA Exam SRM", issued: text("Issued: May 2026", "通过时间：2026年5月") },
    { name: "SOA Exam FAM", issued: text("Issued: May 2026", "通过时间：2026年5月") },
  ],
};

export const credentials = {
  awards: home.honors,
  exams: soa.exams,
  researchContribution: {
    title: text("Technical Auditor", "技术审计员"),
    work: "Humanity’s Last Exam: Auditing Model Steering Failures in Code Generation (arXiv:2501.14249)",
    description: text(
      "Credited in the publication; contributed evaluation feedback on model alignment and failure analysis during a Scale AI internship in 2025.",
      "在论文中获致谢；2025 年于 Scale AI 实习期间，为模型对齐与失败分析提供评估反馈。",
    ),
    url: "https://arxiv.org/abs/2501.14249",
  },
};

export const experience = [
  {
    company: "Lockton Re",
    role: text("Actuarial Intern, Reinsurance", "精算实习生，再保险"),
    location: "New York, NY",
    dates: text("June 2026 – July 2026", "2026 年 6 月 – 2026 年 7 月"),
    logoSrc: "logos/lockton-re.png",
    order: 5,
  },
  {
    company: "Chubb",
    role: text("Actuarial Intern, Quantitative Pricing", "精算实习生，定量定价"),
    location: "Jersey City, NJ",
    dates: text("May 2025 – December 2025", "2025 年 5 月 – 2025 年 12 月"),
    logoSrc: "logos/chubb.png",
    order: 4,
  },
  {
    company: "Scale AI",
    role: text("Technical Advisor Intern, Generative AI", "技术顾问实习生，生成式 AI"),
    location: "Remote",
    dates: text("February 2025 – May 2025", "2025 年 2 月 – 2025 年 5 月"),
    logoSrc: "logos/scale-ai.png",
    order: 3,
  },
  {
    company: "IDX Exchange",
    role: text("Data Scientist Intern", "数据科学实习生"),
    location: "Remote",
    dates: text("September 2024 – December 2024", "2024年9月 – 2024年12月"),
    logoSrc: "logos/idx-exchange.png",
    order: 2,
  },
  {
    company: "ILLINOIS ATLAS",
    role: text("Data Analyst Intern", "数据分析实习生"),
    location: "Urbana, IL",
    team: "Teaching and Learning with Technology",
    dates: text("August 2023 – December 2023", "2023 年 8 月 – 2023 年 12 月"),
    logoSrc: "logos/atlas.png",
    order: 1,
  },
];

export const selectedExperience = [
  { company: "Chubb", role: text("Actuarial Intern, Quantitative Pricing", "精算实习生，定量定价"), year: "2025", logoSrc: "logos/chubb.png" },
  { company: "Scale AI", role: text("Technical Advisor Intern, Generative AI", "技术顾问实习生，生成式 AI"), year: "2025", logoSrc: "logos/scale-ai.png" },
  { company: "NCSA", role: text("Data Scientist Intern – ML SPIN", "数据科学实习生 – ML SPIN"), year: "2024–2025", logoSrc: "logos/ncsa.png" },
];

export const research = [
  {
    role: text("Data Scientist Intern – ML SPIN", "数据科学实习生 – ML SPIN"),
    dates: text("June 2024 – May 2025", "2024 年 6 月 – 2025 年 5 月"),
    institution: { name: "National Center for Supercomputing Applications", url: "https://www.ncsa.illinois.edu/" },
    institutionUrl: "https://www.ncsa.illinois.edu/",
    advisors: [
      { name: "Prof. Angela Lyons", url: "https://csames.illinois.edu/directory/profile/anglyons" },
      { name: "Dr. Aiman Soliman", url: "https://aimansoliman.com/" },
    ] satisfies LinkedName[],
    logoSrc: "logos/ncsa.png",
    logoAlt: "National Center for Supercomputing Applications logo",
    topic: text(
      "A Machine Learning and Geospatial Approach to Targeting Humanitarian Assistance Among Refugees in Lebanon",
      "面向黎巴嫩难民人道主义援助定向的机器学习与地理空间方法",
    ),
    summary: text(
      "This work applies machine learning and geospatial methods to data from Syrian refugees in Lebanon, with the goal of improving how humanitarian support reaches vulnerable families. It investigates practical complements to proxy means testing and multidimensional poverty approaches.",
      "该研究将机器学习与地理空间方法应用于黎巴嫩叙利亚难民数据，以提升人道主义援助对弱势家庭的覆盖效率，并研究对代理收入测试和多维贫困方法的实用补充。",
    ),
    details: text(
      "Traditional proxy means testing offers limited insight and can constrain accuracy and fairness. The project evaluates operationalizable approaches that can support humanitarian organizations facing rising displacement, poverty, and limited funding.",
      "传统代理收入测试提供的信息有限，并可能限制预测准确性与公平性。该项目评估可落地的方法，为面临流离失所、贫困加剧与资金有限的人道主义组织提供支持。",
    ),
    posterUrl: "research/ncsa-syrian-refugees-poster.pdf",
  },
  {
    role: text("Research Assistant – Actuarial Science", "研究助理 – 精算科学"),
    dates: text("January 2025 – May 2025", "2025 年 1 月 – 2025 年 5 月"),
    institution: { name: "Illinois Risk Lab", url: "https://asrm.illinois.edu/illinois-risk-lab/illinois-risk-lab-home" },
    institutionUrl: "https://asrm.illinois.edu/illinois-risk-lab/illinois-risk-lab-home",
    collaborators: { name: "Reinsurance Group of America (RGA)", url: "https://www.rgare.com/" },
    advisors: [
      { name: "Prof. Xiaochen Jing", url: "https://math.illinois.edu/directory/profile/xjing4" },
      { name: "Prof. Frank Quan", url: "https://www.zhiyuquan.net/" },
      { name: "Tim Cardinal" },
      { name: "RGA GFS Valuation EMEA Team" },
    ] satisfies LinkedName[],
    logoSrc: "logos/illinois-risk-lab.png",
    logoAlt: "Illinois Risk Lab logo",
    topic: text(
      "Data-Driven Financial Cash Flow Proxy Models for Global Financial Services Products",
      "面向全球金融服务产品的数据驱动型金融现金流代理模型",
    ),
    summary: text(
      "This R&D collaboration explores data-driven financial cash flow proxy models for Global Financial Services products, including longevity swaps, asset-intensive transactions, and pension risk transfers.",
      "该研发合作探索面向全球金融服务产品的数据驱动型金融现金流代理模型，涉及长寿互换、资产密集型交易和养老金风险转移等场景。",
    ),
    details: text(
      "The project combines actuarial science and data science to assess model assumptions and risk profiles for transactions ranging from approximately $100 million to more than $10 billion.",
      "项目结合精算科学与数据科学，评估模型假设与风险特征，相关交易规模约从 1 亿美元到逾 100 亿美元。",
    ),
  },
  {
    role: text("Undergraduate Researcher", "本科生研究员"),
    dates: text("August 2023 – December 2023", "2023 年 8 月 – 2023 年 12 月"),
    institution: { name: "Illinois Mathematics Lab", url: "https://iml.math.illinois.edu/" },
    institutionUrl: "https://iml.math.illinois.edu/",
    advisors: [{ name: "Prof. Yuliy Baryshnikov", url: "https://ymb.web.illinois.edu/" }] satisfies LinkedName[],
    logoSrc: "logos/illinois-math-lab.png",
    logoAlt: "Illinois Mathematics Lab logo",
    topic: text("Finding the Math Department's Deep Structure", "发现数学系的深层结构"),
    summary: text(
      "This project studied research clusters in the mathematics department through research areas, collaboration communities, publication venues, and disciplinary connections.",
      "该项目通过研究领域、合作社群、发表渠道和学科联系，研究数学系内的研究集群。",
    ),
    details: text(
      "Methods included clustering and aggregation, with theoretical ideas involving averaging on CAT(0) spaces and Sturm's algorithm.",
      "方法包括聚类与聚合，理论思路涉及 CAT(0) 空间上的平均与 Sturm 算法。",
    ),
    posterUrl: "research/iml-deep-structure-poster.pdf",
  },
];

export const projectCategories: { slug: ProjectCategory; title: LocalizedText }[] = [
  { slug: "sar", title: text("SAR — Search · Advertising · Recommendation", "SAR — 搜索 · 广告 · 推荐") },
  { slug: "fraud-data-science", title: text("Fraud Data Science", "欺诈数据科学") },
  { slug: "quantitative-research-trading", title: text("Quantitative Research & Trading", "量化研究与交易") },
  { slug: "product-data-science-experimentation", title: text("Product Data Science & Experimentation", "产品数据科学与实验") },
  { slug: "nlp-llm", title: text("NLP & LLM", "NLP 与大语言模型") },
  { slug: "ml-systems-data-engineering", title: text("ML Systems & Data Engineering", "机器学习系统与数据工程") },
];

const section = (enTitle: string, zhTitle: string, enBody: string, zhBody: string, formulas: ProjectDetailSection["formulas"] = []) => ({ title: text(enTitle, zhTitle), body: [text(enBody, zhBody)], formulas });
const formula = (enLabel: string, zhLabel: string, latex: string, enExplanation: string, zhExplanation: string) => ({ label: text(enLabel, zhLabel), latex, explanation: text(enExplanation, zhExplanation) });
const plannedSections = (methods: string[]): ProjectDetailSection[] => [
  section("Goal & Decision Context", "目标与决策背景", "This planned study starts from a decision problem rather than a model choice.", "该规划研究从决策问题出发，而不是先选择模型。"),
  section("Research Questions", "研究问题", "The work will test whether the proposed approach adds value beyond transparent baselines.", "项目将检验该方法能否在透明基线之上带来增量价值。"),
  section("Data Plan & Information Boundary", "数据计划与信息边界", "Data sources, timestamps, population boundaries, and leakage risks will be documented before modeling.", "将在建模前记录数据源、时间戳、样本边界与信息泄漏风险。"),
  section("Planned Baselines & Methodology", "规划基线与方法", `The planned comparison uses: ${methods.join(", ")}.`, `计划比较的方法包括：${methods.join("、")}。`),
  section("Validation & Evaluation", "验证与评估", "Validation will match the decision setting and separate model quality from decision quality and economic or business value.", "验证方案将匹配实际决策场景，并区分模型质量、决策质量与经济或业务价值。"),
  section("Ablations, Robustness & Acceptance", "消融、稳健性与验收", "The final scope will include baseline comparisons, sensitivity checks, and pre-specified acceptance criteria.", "最终范围将包含基线比较、敏感性检查与预先设定的验收标准。"),
  section("Production Considerations", "生产化考虑", "Implementation constraints, monitoring needs, and reproducibility requirements will be defined before any deployment claim.", "将在任何部署声明前明确实现约束、监控需求与可复现要求。"),
  section("Missing Evidence", "待补充证据", "Results are not yet available. No completed dataset, outcome, or external deliverable is claimed.", "结果尚不可用。当前不声明已完成的数据集、结果或外部交付物。"),
  section("Current Status", "当前状态", "Planned.", "规划中。"),
];
const planned = (slug: string, title: LocalizedText, categories: ProjectCategory[], description: LocalizedText, methods: string[], visualKind: ProjectItem["visualKind"]): ProjectItem => ({ slug, title, categories, status: "planned", description, methods, visualKind, destination: "internal", links: [], detailSections: plannedSections(methods) });
const archive = (slug: string, title: LocalizedText, description: LocalizedText, methods: string[], visualKind: ProjectItem["visualKind"], links: ProjectItem["links"] = [], formulas: ProjectDetailSection["formulas"] = []): ProjectItem => ({ slug, title, categories: [], archived: true, status: "completed", description, methods, visualKind, destination: "internal", links, detailSections: [section("Academic Foundation", "学术基础", description.en, description.zh, formulas), section("Current Status", "当前状态", "Completed academic work retained as a reference project.", "作为参考项目保留的已完成学术工作。") ] });

export const projects: ProjectItem[] = [
  { slug: "sar-system", title: text("SAR Cosmos Lab", "SAR Cosmos Lab"), categories: ["sar"], status: "live", visualKind: "recommendation", destination: "external", description: text("A collaborative portfolio exploring production-oriented search, advertising, recommendation, retrieval, ranking, and large-scale ML systems.", "由 Ricky Gong 与 Ziqi Xu 协作的技术作品集，探索面向生产的搜索、广告、推荐、召回、排序与大规模机器学习系统。"), methods: ["Two-Tower Retrieval", "Learning-to-Rank", "CTR/CVR Modeling", "Candidate Generation", "Re-ranking", "Large-Scale Recommendation"], links: [], externalUrl: "https://ricky-s-gong.github.io/search-rec-ads-portfolio/en/", previewAlt: text("SAR Cosmos Lab homepage preview", "SAR Cosmos Lab 首页预览") },
  planned("real-time-fraud-risk-decisioning", text("Real-Time Fraud Risk Decisioning", "实时欺诈风险决策"), ["fraud-data-science", "ml-systems-data-engineering"], text("Optimize approve, review, and decline decisions under fraud-loss, customer-friction, and review-capacity constraints.", "在欺诈损失、客户摩擦和人工审核能力约束下优化批准、审核与拒绝决策。"), ["LightGBM", "Temporal Validation", "Probability Calibration", "Cost-Sensitive Thresholding", "Recall@ReviewCapacity", "Spark Velocity Features", "SageMaker Deployment"], "fraud"),
  planned("graph-fraud-account-takeover", text("Graph Fraud & Account Takeover", "图欺诈与账户接管"), ["fraud-data-science"], text("Detect coordinated fraud through shared devices, cards, accounts, and transaction networks.", "通过共享设备、卡片、账户与交易网络识别协同欺诈行为。"), ["GraphSAGE", "Node2Vec", "Neighbor-Risk Features", "Heterogeneous Graph", "Time-Aware Graph Split", "Graph + Tabular Ablation"], "fraud-graph"),
  planned("fraud-drift-anomaly-monitoring", text("Fraud Drift & Anomaly Monitoring", "欺诈漂移与异常监控"), ["fraud-data-science", "ml-systems-data-engineering"], text("Study how fraud models degrade under evolving attack patterns and define a champion–challenger monitoring workflow.", "研究欺诈模型如何在不断演化的攻击模式下退化，并定义 champion–challenger 监控流程。"), ["Isolation Forest", "Autoencoder", "Population Stability Index", "KS Drift Test", "Calibration Drift", "Champion–Challenger", "Retraining Trigger"], "monitoring"),
  { slug: "us-equity-cross-sectional-research", title: text("US Equity Cross-Sectional Factor & Alpha Research", "美股横截面因子与 Alpha 研究"), categories: ["quantitative-research-trading"], status: "in-progress", visualKind: "equity", destination: "internal", description: text("Test whether economically motivated equity characteristics retain stable cross-sectional predictive power after point-in-time alignment, neutralization, turnover, and transaction-cost controls.", "检验具有经济动机的股票特征在时点对齐、中性化、换手率和交易成本控制后，是否仍具稳定的横截面预测能力。"), methods: ["Rank IC", "Factor Neutralization", "Alpha Decay", "Quantile Portfolios", "Point-in-Time Fundamentals", "Transaction-Cost Stress", "Sector Exposure Control"], links: [], detailSections: [section("Decision Context & Research Question", "决策背景与研究问题", "The project asks whether a small pre-specified factor set can rank future relative returns without timing leakage.", "项目研究一组预先设定的因子能否在无时间泄漏的条件下对未来相对收益进行排序。"), section("Data Boundary & Baselines", "数据边界与基线", "The public prototype uses liquid U.S.-listed equities and daily OHLCV data; it is not survivorship-bias-free. Zero prediction and univariate sorts are explicit baselines.", "公开原型使用流动性美股与日度 OHLCV 数据，不具备消除幸存者偏差的条件；零预测与单变量排序是明确基线。"), section("Method Selection & Validation", "方法选择与验证", "Ridge and gradient boosting are compared under chronological validation. Rank IC, quintile spreads, turnover, and 0/5/10/20 bps cost stress are pre-specified checks.", "在时间顺序验证下比较 Ridge 与梯度提升；Rank IC、五分位收益差、换手率与 0/5/10/20 bps 成本压力是预先设定的检查。", [formula("Relative-return target", "相对收益目标", "y_{i,t}=r_{i,t}^{(5)}-\\frac{1}{N_t}\\sum_{j=1}^{N_t}r_{j,t}^{(5)}", "The target focuses on cross-sectional differentiation.", "目标聚焦横截面区分能力。"), formula("Rank IC", "Rank IC", "IC_t=\\rho_{\\mathrm{Spearman}}(\\hat y_{i,t},y_{i,t})", "Spearman correlation measures ranking alignment.", "Spearman 相关衡量排序一致性。")]), section("Current Status & Limitations", "当前状态与限制", "The data, model evaluation, and portfolio simulation pipeline is still in progress. No final performance result is claimed.", "数据、模型评估与投资组合模拟流程仍在进行中，不声明最终绩效结果。") ] },
  planned("machine-learning-asset-pricing", text("Machine Learning Asset Pricing", "机器学习资产定价"), ["quantitative-research-trading"], text("Compare linear, tree-based, and neural models for cross-sectional return prediction under strict walk-forward validation.", "在严格滚动验证下比较线性、树模型与神经网络对横截面收益的预测能力。"), ["Elastic Net", "LightGBM", "Neural Networks", "Out-of-Sample R²", "Walk-Forward Validation", "SHAP", "Score-to-Portfolio Mapping"], "asset-pricing"),
  planned("statistical-arbitrage-dynamic-relative-value", text("Statistical Arbitrage & Dynamic Relative Value", "统计套利与动态相对价值"), ["quantitative-research-trading"], text("Test whether dynamic relative-value models remain statistically stable after structural-break and transaction-cost controls.", "检验动态相对价值模型在结构断裂与交易成本控制后是否仍具统计稳定性。"), ["Cointegration", "Kalman Filter", "Ornstein–Uhlenbeck Process", "Rolling ADF", "Half-Life Estimation", "Walk-Forward Backtest", "Cost Sensitivity"], "stat-arb"),
  planned("regime-aware-multi-asset-cta", text("Regime-Aware Multi-Asset CTA", "状态感知多资产 CTA"), ["quantitative-research-trading"], text("Build multi-asset time-series momentum portfolios with volatility targeting and regime-conditioned risk controls.", "构建具有波动率目标和状态条件风险控制的多资产时间序列动量组合。"), ["Time-Series Momentum", "EWMA Volatility", "Volatility Targeting", "Hidden Markov Model", "Multi-Horizon Signals", "Crisis Attribution", "Trend Reversal Analysis"], "cta"),
  planned("volatility-tail-risk-stress-testing", text("Volatility, Tail Risk & Stress Testing", "波动率、尾部风险与压力测试"), ["quantitative-research-trading"], text("Compare econometric and machine-learning volatility forecasts and test VaR and Expected Shortfall calibration during stressed markets.", "比较计量与机器学习波动率预测，并在压力市场中检验 VaR 与 Expected Shortfall 校准。"), ["GARCH", "HAR-RV", "EWMA", "QLIKE", "Expected Shortfall", "Kupiec Test", "Filtered Historical Simulation"], "volatility"),
  planned("alpha-to-execution-portfolio-engine", text("Alpha-to-Execution Portfolio Engine", "从 Alpha 到执行的组合引擎"), ["quantitative-research-trading"], text("Convert noisy alpha forecasts into constrained portfolios while controlling exposure, turnover, capacity, and implementation costs.", "将噪声 Alpha 预测转化为受约束投资组合，并控制暴露、换手、容量和实施成本。"), ["Mean-Variance Optimization", "Turnover Penalty", "Factor Neutrality", "ADV Capacity", "Implementation Shortfall", "TWAP/VWAP", "Transaction-Cost Model"], "execution"),
  planned("experimentation-platform", text("Experimentation Platform", "实验平台"), ["product-data-science-experimentation"], text("Design statistically powered product experiments and translate treatment effects into launch decisions with guardrail constraints.", "设计具有统计效能的产品实验，并在护栏指标约束下将处理效应转化为上线决策。"), ["Power Analysis", "Minimum Detectable Effect", "Sample Ratio Mismatch", "CUPED", "Guardrail Metrics", "Multiple Testing", "Sequential Monitoring"], "experiment"),
  planned("incrementality-uplift-modeling", text("Incrementality & Uplift Modeling", "增量与 Uplift 建模"), ["product-data-science-experimentation"], text("Identify users whose behavior changes because of treatment rather than users who would convert anyway.", "识别因处理而改变行为的用户，而不是本来就会转化的用户。"), ["S-Learner", "T-Learner", "X-Learner", "DR-Learner", "Causal Forest", "Qini Curve", "Policy Value"], "uplift"),
  planned("observational-causal-inference", text("Observational Causal Inference", "观察性因果推断"), ["product-data-science-experimentation"], text("Estimate causal effects from observational data while making identification assumptions and sensitivity to confounding explicit.", "在观察性数据中估计因果效应，并明确识别假设与对混杂的敏感性。"), ["DAG", "Propensity Scores", "Inverse Probability Weighting", "Doubly Robust Estimation", "Double Machine Learning", "Difference-in-Differences", "Sensitivity Analysis"], "causal"),
  planned("enterprise-rag-evaluation", text("Enterprise RAG Evaluation", "企业级 RAG 评估"), ["nlp-llm"], text("Determine which retrieval, reranking, chunking, and grounding choices make enterprise RAG reliable rather than merely fluent.", "确定哪些召回、重排序、切块和 grounding 选择能让企业 RAG 可靠，而不仅是语言流畅。"), ["BM25 + Dense Hybrid", "Cross-Encoder Reranking", "Chunking Ablation", "Recall@K", "MRR", "Citation Precision", "Faithfulness Evaluation"], "rag"),
  planned("customer-complaint-intelligence", text("Customer Complaint Intelligence", "客户投诉智能分析"), ["nlp-llm"], text("Turn unstructured customer complaints into calibrated intent, risk, topic, and retrieval signals for analyst workflows.", "将非结构化客户投诉转化为经过校准的意图、风险、主题与检索信号，支持分析师工作流。"), ["TF-IDF Baseline", "Sentence Embeddings", "Transformer Classification", "Intent Taxonomy", "Long-Tail Error Analysis", "Probability Calibration", "Topic Clustering"], "language"),
  planned("financial-nlp-alternative-data-alpha", text("Financial NLP & Alternative-Data Alpha", "金融 NLP 与另类数据 Alpha"), ["quantitative-research-trading", "nlp-llm"], text("Test whether timestamp-aligned public financial text contains incremental information for future returns after controlling for standard signals.", "检验经时间戳对齐的公开金融文本在控制标准信号后，是否包含对未来收益的增量信息。"), ["FinBERT", "Loughran–McDonald", "Structured Event Extraction", "Timestamp Alignment", "Event Study", "Incremental Rank IC", "Alternative Data"], "language"),
  planned("large-scale-feature-training-pipeline", text("Large-Scale Feature & Training Pipeline", "大规模特征与训练管道"), ["ml-systems-data-engineering"], text("Build reproducible point-in-time training datasets and feature pipelines for large-scale ranking and fraud workloads.", "为大规模排序与欺诈工作负载构建可复现的时点训练数据集与特征管道。"), ["Spark Window Functions", "Point-in-Time Joins", "Partition Pruning", "Incremental ETL", "Feature Store Design", "Data Validation", "Backfill Strategy"], "pipeline"),
  planned("production-ml-monitoring", text("Production ML Monitoring & Champion–Challenger", "生产 ML 监控与 Champion–Challenger"), ["ml-systems-data-engineering"], text("Monitor feature, prediction, calibration, and decision drift and define safe retraining and challenger-promotion rules.", "监控特征、预测、校准与决策漂移，并定义安全的再训练与 challenger 晋升规则。"), ["MLflow Registry", "SageMaker Endpoint", "CloudWatch Monitoring", "Feature Drift", "Prediction Drift", "Champion–Challenger", "Automated Retraining"], "monitoring"),
  archive("zrx-usd-time-series-analysis", text("ZRX/USD Time Series & Predictive Modeling", "ZRX/USD 时间序列与预测建模"), text("A team study using regression, ARIMA(0,1,1) residual modeling, stationarity tests, and diagnostics.", "一项使用回归、ARIMA(0,1,1) 残差建模、平稳性检验与诊断的团队研究。"), ["ARIMA(0,1,1)", "ADF Test", "Ljung–Box Test", "AIC / BIC", "Regression with ARIMA Errors"], "time", [{ label: text("Watch presentation", "观看展示"), url: "https://youtu.be/upVRhvnteMk" }], [formula("Regression with ARIMA errors", "带 ARIMA 误差的回归", "Y_t=X_t^\\top\\beta+e_t,\\quad e_t\\sim ARIMA(0,1,1)", "The model keeps market predictors while modeling serial dependence.", "该模型在保留市场预测变量的同时对序列相关性建模。")]),
  archive("reaction-time-statistical-modeling", text("Reaction Time Statistical Modeling", "反应时间统计建模"), text("An R-based study of demographic, behavioral, device, and environmental associations with reaction time.", "一项基于 R 的研究，分析人口、行为、设备与环境变量和反应时间之间的关联。"), ["Wilcoxon Rank-Sum", "Nested F-Test", "Best-Subset Selection", "Box–Cox Transform", "Residual Diagnostics"], "regression"),
  archive("flu-shot-analytics", text("Flu Shot Analytics Dashboard", "流感疫苗分析仪表板"), text("A SQL cohort pipeline and Tableau dashboard measuring flu-vaccination coverage across demographic, geographic, and time dimensions.", "一项 SQL 队列管道与 Tableau 仪表板，衡量不同人口、地理与时间维度下的流感疫苗覆盖率。"), ["SQL CTEs", "Patient Cohort Definition", "LEFT JOIN Denominator Logic", "Coverage KPI", "Tableau"], "cohort", [{ label: text("View Tableau dashboard", "查看 Tableau 仪表板"), url: "https://public.tableau.com/app/profile/ziqi.xu6990/viz/FluShotsDashboard_17311271789370/Dashboard1" }]),
  archive("math-deep-structure-research", text("Math Department Deep Structure Research", "数学系深层结构研究"), text("A collaborative research workspace studying faculty-network structure through similarity graphs, spectral methods, SVD, and hierarchical trees.", "一项协作研究，通过相似度图、谱方法、SVD 与层次树研究数学系教师网络结构。"), ["Similarity Graphs", "Normalized Laplacian", "Spectral Embedding", "Truncated SVD", "UPGMA / Neighbor Joining"], "graph"),
];

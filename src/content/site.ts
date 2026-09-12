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
const workflowStep = (enTitle: string, zhTitle: string, enDetail: string, zhDetail: string) => ({ title: text(enTitle, zhTitle), detail: text(enDetail, zhDetail) });
const plannedSections = (methods: string[]): ProjectDetailSection[] => [
  section("Decision to Support", "要支持的决策", "This planned study starts with a decision problem and a clear comparison against transparent baselines—not a preselected model.", "这项规划研究从决策问题和可解释基线比较出发，而不是先选定模型。"),
  section("Proposed Research Design", "计划研究设计", `The intended workflow documents data boundaries and leakage risks before comparing: ${methods.join(", ")}.`, `计划流程会先记录数据边界和信息泄漏风险，再比较：${methods.join("、")}。`),
  section("Evidence Required", "所需证据", "Validation will separate model quality from decision quality and economic or business value, with sensitivity checks and pre-specified acceptance criteria.", "验证会区分模型质量、决策质量和经济或业务价值，并包含敏感性检查及预先设定的验收标准。"),
  section("Current Status", "当前状态", "Results are not yet available. No completed dataset, outcome, external deliverable, or production claim is made.", "结果尚不可用。当前不声明已完成的数据、结果、外部交付物或生产部署。"),
];
const planned = (slug: string, title: LocalizedText, categories: ProjectCategory[], description: LocalizedText, methods: string[], visualKind: ProjectItem["visualKind"]): ProjectItem => ({ slug, title, categories, status: "planned", description, methods, visualKind, destination: "internal", links: [], detailSections: plannedSections(methods), workflow: [workflowStep("Frame the decision", "明确决策", "Set the decision, population, timestamps, and leakage boundary.", "明确决策、样本范围、时间戳和信息泄漏边界。"), workflowStep("Compare transparent baselines", "比较透明基线", "Test the proposed methods against simple, documented alternatives.", "将计划方法与简单、可追溯的替代方案比较。"), workflowStep("Validate before claiming value", "验证后再声明价值", "Evaluate robustness and decision value before any result or deployment claim.", "在任何结果或部署声明前评估稳健性与决策价值。")], interviewTakeaway: text("A strong interview explanation starts with the decision and information boundary, then explains why the validation design can challenge the proposed method.", "适合面试的讲解应从决策和信息边界开始，再说明验证设计如何真正检验计划方法。") });
const archive = (slug: string, title: LocalizedText, description: LocalizedText, methods: string[], visualKind: ProjectItem["visualKind"], links: ProjectItem["links"] = [], formulas: ProjectDetailSection["formulas"] = []): ProjectItem => ({ slug, title, categories: [], archived: true, status: "completed", description, methods, visualKind, destination: "internal", links, detailSections: [section("Academic Foundation", "学术基础", description.en, description.zh, formulas), section("Current Status", "当前状态", "Completed academic work retained as a reference project.", "作为参考项目保留的已完成学术工作。") ] });

export const projects: ProjectItem[] = [
  { slug: "sar-system", title: text("SAR Cosmos Lab", "SAR Cosmos Lab"), categories: ["sar"], status: "live", visualKind: "recommendation", destination: "external", description: text("A collaborative portfolio exploring production-oriented search, advertising, recommendation, retrieval, ranking, and large-scale ML systems.", "由 Ricky Gong 与 Ziqi Xu 协作的技术作品集，探索面向生产的搜索、广告、推荐、召回、排序与大规模机器学习系统。"), methods: ["Two-Tower Retrieval", "Learning-to-Rank", "CTR/CVR Modeling", "Candidate Generation", "Re-ranking", "Large-Scale Recommendation"], links: [], externalUrl: "https://ricky-s-gong.github.io/search-rec-ads-portfolio/en/", previewAlt: text("SAR Cosmos Lab homepage preview", "SAR Cosmos Lab 首页预览") },
  {
    slug: "production-fraud-risk-decision-system",
    title: text("Production Fraud Risk Decision System", "生产级欺诈风险决策系统"),
    categories: ["fraud-data-science", "ml-systems-data-engineering"],
    status: "completed",
    visualKind: "fraud",
    destination: "internal",
    description: text("An end-to-end fraud decision system that connects leakage-safe modeling, calibrated risk scores, operating thresholds, deployment, and monitoring.", "一个端到端欺诈决策系统，将防泄漏建模、风险概率校准、运营阈值、部署与监控连接起来。"),
    methods: ["Temporal Validation", "Logistic Baseline", "LightGBM", "Platt Calibration", "PR-AUC", "Cost-Sensitive Thresholding", "PSI Monitoring"],
    links: [{ label: text("GitHub repository", "GitHub 仓库"), url: "https://github.com/ziqixu22/production-fraud-risk-decision-system" }],
    detailSections: [
      section("Decision Context", "决策背景", "Fraud screening is framed as an approve, review, or decline decision under asymmetric fraud-loss, customer-friction, and review-capacity costs—not as an accuracy contest.", "欺诈筛查被定义为在欺诈损失、客户摩擦与审核能力成本不对称条件下的批准、人工审核或拒绝决策，而不是准确率竞赛。"),
      section("Data Boundary & Temporal Validation", "数据边界与时间验证", "The verified analysis uses a 590,540-row public model-ready table derived from IEEE-CIS/Vesta data, with 3.50% fraud prevalence and a chronological 413,378 / 88,581 / 88,581 train-validation-test split.", "经验证的分析使用源自 IEEE-CIS/Vesta 数据的 590,540 行公开建模表，欺诈率为 3.50%，并按时间顺序划分为 413,378 / 88,581 / 88,581 条训练、验证和测试数据。"),
      section("Baselines, Model & Calibration", "基线、模型与校准", "A logistic-regression baseline reached 0.2247 validation PR-AUC, while LightGBM reached 0.6312. Platt calibration reduced validation Brier score from 0.0420 to 0.0192 so scores could support threshold decisions.", "逻辑回归基线的验证集 PR-AUC 为 0.2247，LightGBM 为 0.6312；Platt 校准将验证集 Brier score 从 0.0420 降至 0.0192，使分数更适合阈值决策。"),
      section("Evaluation & Operating Policy", "评估与运营策略", "On the chronological test set, calibrated LightGBM reached 0.9332 ROC-AUC, 0.5728 PR-AUC, and a 0.0212 Brier score. The validation-selected threshold produced 83.43% fraud recall, 19.35% precision, and a 12.54% false-positive rate.", "在时间顺序测试集上，校准后的 LightGBM 达到 0.9332 ROC-AUC、0.5728 PR-AUC 和 0.0212 Brier score；由验证集选择的阈值取得 83.43% 欺诈召回率、19.35% 精确率和 12.54% 假阳性率。"),
      section("Cost Scenario & Limitations", "成本情景与局限", "Under explicit illustrative assumptions of $200 per missed fraud and $8 per false decline, expected test cost was 50.02% lower than at a naive 0.50 threshold. This is a scenario comparison, not a claim of real-company savings.", "在每笔漏判欺诈成本为 200 美元、每笔误拒成本为 8 美元的明确示例假设下，测试集预期成本比随意采用 0.50 阈值低 50.02%。这是情景比较，不代表真实公司的成本节省。"),
      section("Production Path & Monitoring", "生产路径与监控", "The repository connects schema validation, feature engineering, MLflow metadata, a FastAPI prediction contract, Docker, CI, and feature/score drift monitoring. Validation-to-test score PSI was 0.0023 for the reported windows.", "仓库串联了 schema 验证、特征工程、MLflow 元数据、FastAPI 预测接口、Docker、CI 以及特征与评分漂移监控；报告时间窗口中的验证集到测试集评分 PSI 为 0.0023。"),
      section("Current Status", "当前状态", "Completed. Code, tests, CI, persisted result files, and the full modeling analysis are available in the public repository.", "已完成。代码、测试、CI、持久化结果文件及完整建模分析均可在公开仓库中查看。"),
    ],
    workflow: [
      workflowStep("Keep time honest", "保持时间顺序", "Split the public data chronologically before model selection.", "在模型选择前按时间顺序划分公开数据。"),
      workflowStep("Calibrate risk", "校准风险", "Compare the baseline and LightGBM, then calibrate scores for policy use.", "比较基线与 LightGBM，再校准分数以支持策略使用。"),
      workflowStep("Choose an operating policy", "选择运营策略", "Use validation evidence to set approve, review, and decline thresholds.", "使用验证证据设定批准、审核与拒绝阈值。"),
      workflowStep("Monitor the decision", "监控决策", "Track drift and the policy contract after deployment.", "部署后追踪漂移与策略契约。"),
    ],
    interviewTakeaway: text("Explain why PR-AUC, calibration, and an operating threshold answer different questions—and why the cost result is only an explicit scenario, not a company-savings claim.", "说明 PR-AUC、校准和运营阈值分别回答什么问题，并强调成本结果仅是明确假设下的情景比较，而非公司收益声明。"),
  },
  planned("graph-fraud-account-takeover", text("Graph Fraud & Account Takeover", "图欺诈与账户接管"), ["fraud-data-science"], text("Detect coordinated fraud through shared devices, cards, accounts, and transaction networks.", "通过共享设备、卡片、账户与交易网络识别协同欺诈行为。"), ["GraphSAGE", "Node2Vec", "Neighbor-Risk Features", "Heterogeneous Graph", "Time-Aware Graph Split", "Graph + Tabular Ablation"], "fraud-graph"),
  planned("fraud-drift-anomaly-monitoring", text("Fraud Drift & Anomaly Monitoring", "欺诈漂移与异常监控"), ["fraud-data-science", "ml-systems-data-engineering"], text("Study how fraud models degrade under evolving attack patterns and define a champion–challenger monitoring workflow.", "研究欺诈模型如何在不断演化的攻击模式下退化，并定义 champion–challenger 监控流程。"), ["Isolation Forest", "Autoencoder", "Population Stability Index", "KS Drift Test", "Calibration Drift", "Champion–Challenger", "Retraining Trigger"], "monitoring"),
  { slug: "us-equity-cross-sectional-research", title: text("US Equity Cross-Sectional Factor & Alpha Research", "美股横截面因子与 Alpha 研究"), categories: ["quantitative-research-trading"], status: "in-progress", visualKind: "equity", destination: "internal", description: text("Test whether economically motivated equity characteristics retain stable cross-sectional predictive power after point-in-time alignment, neutralization, turnover, and transaction-cost controls.", "检验具有经济动机的股票特征在时点对齐、中性化、换手率和交易成本控制后，是否仍具稳定的横截面预测能力。"), methods: ["Rank IC", "Factor Neutralization", "Alpha Decay", "Quantile Portfolios", "Point-in-Time Fundamentals", "Transaction-Cost Stress", "Sector Exposure Control"], links: [], detailSections: [section("Decision Context & Research Question", "决策背景与研究问题", "The project asks whether a small pre-specified factor set can rank future relative returns without timing leakage.", "项目研究一组预先设定的因子能否在无时间泄漏的条件下对未来相对收益进行排序。"), section("Data Boundary & Baselines", "数据边界与基线", "The public prototype uses liquid U.S.-listed equities and daily OHLCV data; it is not survivorship-bias-free. Zero prediction and univariate sorts are explicit baselines.", "公开原型使用流动性美股与日度 OHLCV 数据，不具备消除幸存者偏差的条件；零预测与单变量排序是明确基线。"), section("Method Selection & Validation", "方法选择与验证", "Ridge and gradient boosting are compared under chronological validation. Rank IC, quintile spreads, turnover, and 0/5/10/20 bps cost stress are pre-specified checks.", "在时间顺序验证下比较 Ridge 与梯度提升；Rank IC、五分位收益差、换手率与 0/5/10/20 bps 成本压力是预先设定的检查。", [formula("Relative-return target", "相对收益目标", "y_{i,t}=r_{i,t}^{(5)}-\\frac{1}{N_t}\\sum_{j=1}^{N_t}r_{j,t}^{(5)}", "The target focuses on cross-sectional differentiation.", "目标聚焦横截面区分能力。"), formula("Rank IC", "Rank IC", "IC_t=\\rho_{\\mathrm{Spearman}}(\\hat y_{i,t},y_{i,t})", "Spearman correlation measures ranking alignment.", "Spearman 相关衡量排序一致性。")]), section("Current Status & Limitations", "当前状态与限制", "The data, model evaluation, and portfolio simulation pipeline is still in progress. No final performance result is claimed.", "数据、模型评估与投资组合模拟流程仍在进行中，不声明最终绩效结果。") ] },
  planned("machine-learning-asset-pricing", text("Machine Learning Asset Pricing", "机器学习资产定价"), ["quantitative-research-trading"], text("Compare linear, tree-based, and neural models for cross-sectional return prediction under strict walk-forward validation.", "在严格滚动验证下比较线性、树模型与神经网络对横截面收益的预测能力。"), ["Elastic Net", "LightGBM", "Neural Networks", "Out-of-Sample R²", "Walk-Forward Validation", "SHAP", "Score-to-Portfolio Mapping"], "asset-pricing"),
  planned("statistical-arbitrage-dynamic-relative-value", text("Statistical Arbitrage & Dynamic Relative Value", "统计套利与动态相对价值"), ["quantitative-research-trading"], text("Test whether dynamic relative-value models remain statistically stable after structural-break and transaction-cost controls.", "检验动态相对价值模型在结构断裂与交易成本控制后是否仍具统计稳定性。"), ["Cointegration", "Kalman Filter", "Ornstein–Uhlenbeck Process", "Rolling ADF", "Half-Life Estimation", "Walk-Forward Backtest", "Cost Sensitivity"], "stat-arb"),
  planned("regime-aware-multi-asset-cta", text("Regime-Aware Multi-Asset CTA", "状态感知多资产 CTA"), ["quantitative-research-trading"], text("Build multi-asset time-series momentum portfolios with volatility targeting and regime-conditioned risk controls.", "构建具有波动率目标和状态条件风险控制的多资产时间序列动量组合。"), ["Time-Series Momentum", "EWMA Volatility", "Volatility Targeting", "Hidden Markov Model", "Multi-Horizon Signals", "Crisis Attribution", "Trend Reversal Analysis"], "cta"),
  planned("volatility-tail-risk-stress-testing", text("Volatility, Tail Risk & Stress Testing", "波动率、尾部风险与压力测试"), ["quantitative-research-trading"], text("Compare econometric and machine-learning volatility forecasts and test VaR and Expected Shortfall calibration during stressed markets.", "比较计量与机器学习波动率预测，并在压力市场中检验 VaR 与 Expected Shortfall 校准。"), ["GARCH", "HAR-RV", "EWMA", "QLIKE", "Expected Shortfall", "Kupiec Test", "Filtered Historical Simulation"], "volatility"),
  planned("alpha-to-execution-portfolio-engine", text("Alpha-to-Execution Portfolio Engine", "从 Alpha 到执行的组合引擎"), ["quantitative-research-trading"], text("Convert noisy alpha forecasts into constrained portfolios while controlling exposure, turnover, capacity, and implementation costs.", "将噪声 Alpha 预测转化为受约束投资组合，并控制暴露、换手、容量和实施成本。"), ["Mean-Variance Optimization", "Turnover Penalty", "Factor Neutrality", "ADV Capacity", "Implementation Shortfall", "TWAP/VWAP", "Transaction-Cost Model"], "execution"),
  {
    slug: "ecommerce-product-analytics-experimentation",
    title: text("E-commerce Product Analytics & Experimentation Platform", "电商产品分析与实验平台"),
    categories: ["product-data-science-experimentation"],
    status: "completed",
    visualKind: "experiment",
    destination: "internal",
    description: text("A reproducible platform separating observational commerce analytics from randomized incrementality measurement and translating both into product decisions.", "一个可复现的平台，将观察性电商分析与随机增量实验严格区分，并把两类证据转化为产品决策。"),
    methods: ["SQL CTEs & Window Functions", "Cohort Retention", "SRM Test", "Treatment Effects", "Confidence Intervals", "Power Analysis", "Heterogeneity Analysis"],
    links: [{ label: text("GitHub repository", "GitHub 仓库"), url: "https://github.com/ziqixu22/ecommerce-product-analytics-experimentation" }],
    detailSections: [
      section("Decision Context", "决策背景", "The project keeps product diagnosis and causal measurement separate: retail transactions describe customer and revenue behavior, while randomized experiment data estimates what treatment caused.", "该项目将产品诊断与因果测量分开：零售交易描述客户和收入行为，随机实验数据则估计处理真正造成的变化。"),
      section("Data Boundary", "数据边界", "Product analytics use 1,067,371 raw Online Retail II transaction lines. Experimentation uses 13,979,592 randomized Criteo Uplift rows with treatment, visit, conversion, exposure, and anonymized features.", "产品分析使用 Online Retail II 的 1,067,371 条原始交易记录；实验分析使用 Criteo Uplift 的 13,979,592 条随机实验数据，包含处理、访问、转化、曝光与匿名特征。"),
      section("Product Analytics", "产品分析", "After excluding cancellations and invalid sales, the pipeline identified 36,969 completed orders from 5,878 customers and £17.74M in completed-sales revenue. The cancellation rate was 15.46%, the repeat-customer rate 72.39%, and month-1 retention 23.15%.", "排除取消订单和无效销售后，管道识别出 5,878 位客户的 36,969 笔完成订单及 1,774 万英镑销售收入；取消率为 15.46%，复购客户率为 72.39%，第一个月留存率为 23.15%。"),
      section("Experiment Validity", "实验有效性", "The observed treatment share was 85.00%. A sample-ratio-mismatch test against the intended 85/15 allocation returned p = 0.9989, providing no evidence of an allocation mismatch.", "观察到的处理组比例为 85.00%；针对预设 85/15 分配的样本比例失配检验得到 p = 0.9989，没有发现分配异常的证据。"),
      section("Treatment Effects", "处理效应", "Visit rate increased from 3.82% to 4.85%, an absolute lift of 1.03 percentage points with a 95% confidence interval of 1.006–1.063 pp. Conversion increased from 0.194% to 0.309%, an absolute lift of 0.115 pp with a 95% confidence interval of 0.108–0.122 pp.", "访问率从 3.82% 提升到 4.85%，绝对提升 1.03 个百分点，95% 置信区间为 1.006–1.063 个百分点；转化率从 0.194% 提升到 0.309%，绝对提升 0.115 个百分点，95% 置信区间为 0.108–0.122 个百分点。"),
      section("Interpretation & Limitations", "解释与局限", "A strong response in one exploratory feature quartile is treated as a follow-up hypothesis rather than a targeting claim. With nearly 14 million rows, decisions should emphasize effect size, uncertainty, economics, and guardrails—not p-values alone.", "某个探索性特征分位组中的较强响应被视为后续验证假设，而不是直接的定向结论。面对近 1,400 万条数据，决策应关注效应大小、不确定性、经济价值与护栏指标，而不能只看 p 值。"),
      section("Current Status", "当前状态", "Completed. The repository includes modular analysis code, SQL, unit tests, CI, persisted JSON results, and a reproducible full-data workflow.", "已完成。仓库包含模块化分析代码、SQL、单元测试、CI、持久化 JSON 结果及可复现的全量数据工作流。"),
    ],
    workflow: [
      workflowStep("Separate evidence types", "区分证据类型", "Keep observational product diagnosis separate from randomized causal measurement.", "将观察性产品诊断与随机因果测量严格分开。"),
      workflowStep("Build the denominator", "构建完整分母", "Clean transactions and define customers, orders, and retention consistently.", "清洗交易，并一致地定义客户、订单和留存。"),
      workflowStep("Validate the experiment", "验证实验", "Check allocation before interpreting a treatment effect.", "在解释处理效应之前检查实验分配。"),
      workflowStep("Make a guarded decision", "做出受护栏约束的决策", "Read effect size, uncertainty, economics, and guardrails together.", "结合效应大小、不确定性、经济价值和护栏指标作出判断。"),
    ],
    interviewTakeaway: text("The core distinction is descriptive versus causal evidence: transactions can describe behavior, while randomization supports a treatment-effect claim.", "核心区别是描述性证据与因果证据：交易可以描述行为，随机化才支持处理效应的主张。"),
  },
  planned("incrementality-uplift-modeling", text("Incrementality & Uplift Modeling", "增量与 Uplift 建模"), ["product-data-science-experimentation"], text("Identify users whose behavior changes because of treatment rather than users who would convert anyway.", "识别因处理而改变行为的用户，而不是本来就会转化的用户。"), ["S-Learner", "T-Learner", "X-Learner", "DR-Learner", "Causal Forest", "Qini Curve", "Policy Value"], "uplift"),
  planned("observational-causal-inference", text("Observational Causal Inference", "观察性因果推断"), ["product-data-science-experimentation"], text("Estimate causal effects from observational data while making identification assumptions and sensitivity to confounding explicit.", "在观察性数据中估计因果效应，并明确识别假设与对混杂的敏感性。"), ["DAG", "Propensity Scores", "Inverse Probability Weighting", "Doubly Robust Estimation", "Double Machine Learning", "Difference-in-Differences", "Sensitivity Analysis"], "causal"),
  planned("enterprise-rag-evaluation", text("Enterprise RAG Evaluation", "企业级 RAG 评估"), ["nlp-llm"], text("Determine which retrieval, reranking, chunking, and grounding choices make enterprise RAG reliable rather than merely fluent.", "确定哪些召回、重排序、切块和 grounding 选择能让企业 RAG 可靠，而不仅是语言流畅。"), ["BM25 + Dense Hybrid", "Cross-Encoder Reranking", "Chunking Ablation", "Recall@K", "MRR", "Citation Precision", "Faithfulness Evaluation"], "rag"),
  {
    slug: "llm-evaluation-release-platform",
    title: text("LLM Evaluation & Release Decision Platform", "LLM 评估与发布决策平台"),
    categories: ["nlp-llm", "ml-systems-data-engineering"],
    status: "completed",
    visualKind: "evaluation",
    destination: "internal",
    description: text("A reproducible release gate that audits automated LLM judges against human preference labels, checks order sensitivity, and routes uncertain decisions to human review.", "一个可复现的发布门槛系统：以人工偏好标签审计自动 LLM 裁判，检查顺序敏感性，并将不确定决策路由给人工复核。"),
    methods: ["Human Preference Labels", "A/B Reversal Audit", "Symmetric Scoring", "Confidence Routing", "Cohen’s Kappa", "Bootstrap Confidence Intervals", "Release Policy"],
    links: [{ label: text("GitHub repository", "GitHub 仓库"), url: "https://github.com/ziqixu22/llm-evaluation-release-platform" }],
    workflow: [
      workflowStep("Anchor to human outcomes", "以人工结果为锚点", "Use held-out human preference labels as the evaluation target.", "以保留的人工偏好标签作为评估目标。"),
      workflowStep("Audit the judge", "审计裁判", "Run original and reversed A/B comparisons to expose order sensitivity.", "同时运行原始与反转 A/B 比较，识别顺序敏感性。"),
      workflowStep("Route uncertainty", "路由不确定样本", "Use symmetric scoring and confidence rules to separate automatic decisions from review cases.", "通过对称评分和置信度规则区分自动决策与人工复核案例。"),
      workflowStep("Gate release", "决定发布门槛", "Record agreement, uncertainty, and policy evidence before permitting a release.", "在允许发布前记录一致性、不确定性和策略证据。"),
    ],
    interviewTakeaway: text("The key point is not that an LLM can judge another LLM. It is that a release decision needs human-grounded agreement, order-robustness checks, and a safe fallback for uncertain cases.", "关键不在于 LLM 能否评判另一个 LLM，而在于发布决策必须具备以人工为锚的一致性、顺序稳健性检查，以及针对不确定案例的安全回退。"),
    detailSections: [
      section("Decision Context", "决策背景", "The platform asks whether an automated judge is reliable enough to support an LLM release decision, rather than treating a single score as proof of quality.", "该平台关注自动裁判是否足以支持 LLM 发布决策，而不是把单个评分当作质量证明。"),
      section("Evaluation Design", "评估设计", "The repository evaluates 57,477 pairwise records, including 64 human-preference reference cases and 49,938 paired original/reversed A/B audits. Symmetric scoring combines both presentation orders instead of trusting one direction.", "仓库评估了 57,477 条成对记录，其中包括 64 个带人工偏好参考的案例和 49,938 对原始/反转 A/B 审计。对称评分结合两个呈现顺序，而非只相信单一方向。"),
      section("Evidence & Release Decision", "证据与发布决策", "For the reported Starling judge, agreement with the reference labels was 47.44% in the original order, 66.37% when reversed, and 61% after symmetric scoring. The repository’s documented outcome is HUMAN_REVIEW_REQUIRED—not automatic release approval.", "对于仓库报告的 Starling 裁判，与参考标签的一致率在原始顺序下为 47.44%，反转后为 66.37%，对称评分后为 61%。仓库记录的结论是 HUMAN_REVIEW_REQUIRED（需要人工复核），而不是自动批准发布。"),
      section("Limits & Interview Walkthrough", "局限与面试讲解", "The reference set is small and agreement alone does not establish safety or broad generalization. In an interview, explain the failure mode first: a judge that changes under A/B reversal should not silently control a release decision.", "参考集规模较小，单靠一致性也不能证明安全性或广泛泛化能力。面试时应先解释失败模式：会随 A/B 顺序反转而变化的裁判，不应在无人工监督下决定发布。"),
    ],
  },
  planned("customer-complaint-intelligence", text("Customer Complaint Intelligence", "客户投诉智能分析"), ["nlp-llm"], text("Turn unstructured customer complaints into calibrated intent, risk, topic, and retrieval signals for analyst workflows.", "将非结构化客户投诉转化为经过校准的意图、风险、主题与检索信号，支持分析师工作流。"), ["TF-IDF Baseline", "Sentence Embeddings", "Transformer Classification", "Intent Taxonomy", "Long-Tail Error Analysis", "Probability Calibration", "Topic Clustering"], "language"),
  planned("financial-nlp-alternative-data-alpha", text("Financial NLP & Alternative-Data Alpha", "金融 NLP 与另类数据 Alpha"), ["quantitative-research-trading", "nlp-llm"], text("Test whether timestamp-aligned public financial text contains incremental information for future returns after controlling for standard signals.", "检验经时间戳对齐的公开金融文本在控制标准信号后，是否包含对未来收益的增量信息。"), ["FinBERT", "Loughran–McDonald", "Structured Event Extraction", "Timestamp Alignment", "Event Study", "Incremental Rank IC", "Alternative Data"], "language"),
  planned("large-scale-feature-training-pipeline", text("Large-Scale Feature & Training Pipeline", "大规模特征与训练管道"), ["ml-systems-data-engineering"], text("Build reproducible point-in-time training datasets and feature pipelines for large-scale ranking and fraud workloads.", "为大规模排序与欺诈工作负载构建可复现的时点训练数据集与特征管道。"), ["Spark Window Functions", "Point-in-Time Joins", "Partition Pruning", "Incremental ETL", "Feature Store Design", "Data Validation", "Backfill Strategy"], "pipeline"),
  planned("production-ml-monitoring", text("Production ML Monitoring & Champion–Challenger", "生产 ML 监控与 Champion–Challenger"), ["ml-systems-data-engineering"], text("Monitor feature, prediction, calibration, and decision drift and define safe retraining and challenger-promotion rules.", "监控特征、预测、校准与决策漂移，并定义安全的再训练与 challenger 晋升规则。"), ["MLflow Registry", "SageMaker Endpoint", "CloudWatch Monitoring", "Feature Drift", "Prediction Drift", "Champion–Challenger", "Automated Retraining"], "monitoring"),
  archive("zrx-usd-time-series-analysis", text("ZRX/USD Time Series & Predictive Modeling", "ZRX/USD 时间序列与预测建模"), text("A team study using regression, ARIMA(0,1,1) residual modeling, stationarity tests, and diagnostics.", "一项使用回归、ARIMA(0,1,1) 残差建模、平稳性检验与诊断的团队研究。"), ["ARIMA(0,1,1)", "ADF Test", "Ljung–Box Test", "AIC / BIC", "Regression with ARIMA Errors"], "time", [{ label: text("Watch presentation", "观看展示"), url: "https://youtu.be/upVRhvnteMk" }], [formula("Regression with ARIMA errors", "带 ARIMA 误差的回归", "Y_t=X_t^\\top\\beta+e_t,\\quad e_t\\sim ARIMA(0,1,1)", "The model keeps market predictors while modeling serial dependence.", "该模型在保留市场预测变量的同时对序列相关性建模。")]),
  archive("reaction-time-statistical-modeling", text("Reaction Time Statistical Modeling", "反应时间统计建模"), text("An R-based study of demographic, behavioral, device, and environmental associations with reaction time.", "一项基于 R 的研究，分析人口、行为、设备与环境变量和反应时间之间的关联。"), ["Wilcoxon Rank-Sum", "Nested F-Test", "Best-Subset Selection", "Box–Cox Transform", "Residual Diagnostics"], "regression"),
  archive("flu-shot-analytics", text("Flu Shot Analytics Dashboard", "流感疫苗分析仪表板"), text("A SQL cohort pipeline and Tableau dashboard measuring flu-vaccination coverage across demographic, geographic, and time dimensions.", "一项 SQL 队列管道与 Tableau 仪表板，衡量不同人口、地理与时间维度下的流感疫苗覆盖率。"), ["SQL CTEs", "Patient Cohort Definition", "LEFT JOIN Denominator Logic", "Coverage KPI", "Tableau"], "cohort", [{ label: text("View Tableau dashboard", "查看 Tableau 仪表板"), url: "https://public.tableau.com/app/profile/ziqi.xu6990/viz/FluShotsDashboard_17311271789370/Dashboard1" }]),
  archive("math-deep-structure-research", text("Math Department Deep Structure Research", "数学系深层结构研究"), text("A collaborative research workspace studying faculty-network structure through similarity graphs, spectral methods, SVD, and hierarchical trees.", "一项协作研究，通过相似度图、谱方法、SVD 与层次树研究数学系教师网络结构。"), ["Similarity Graphs", "Normalized Laplacian", "Spectral Embedding", "Truncated SVD", "UPGMA / Neighbor Joining"], "graph"),
];

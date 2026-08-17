import { getStoredLanguage } from "../i18n/language";
import { localize } from "./types";
import type { Language, LocalizedText } from "./types";

export { getStoredLanguage, localize };
export type { Language, LocalizedText };

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
      opening: "Hi, I’m Ziqi Xu, and you can also call me Zoe. I am currently studying at the University of Illinois Urbana-Champaign (UIUC), double majoring in Statistics and Actuarial Science.",
      research: "My undergraduate research focuses on using quantitative methods to solve meaningful real-world problems, spanning socioeconomics and humanitarian assistance, financial risk, and mathematical modeling. At UIUC, I have worked with Prof. Angela Lyons, Prof. Xiaochen Jing, Prof. Frank Quan, and Prof. Yuliy Baryshnikov.",
      industry: "In industry, my work focuses on quantitative analysis, product pricing, loss ratio analysis, AI model training, and data visualization, with applications of statistical modeling and machine learning to real-world problems.",
      focusLead: "I am currently exploring opportunities in both Industry and Research, mainly in:",
      focuses: [
        { title: "Quantitative Research / Quantitative Analyst", description: "systematic trading, alpha and factor research, time-series and risk modeling, portfolio analysis, and market microstructure." },
        { title: "Modeling / Product Data Science", description: "product and growth analytics, machine learning, fraud and risk modeling, recommender systems, customer segmentation, A/B testing, and dynamic pricing." },
        { title: "Artificial Intelligence & Machine Learning", description: "AI Agents, Large Language Models, NLP, Machine Learning Systems, and model training and evaluation." },
      ],
      statement: "I am not afraid of challenges. What I fear more is becoming someone who stops learning and exploring. So I hope to keep learning and keep sharing.",
      closing: "Feel free to connect with me on LinkedIn. I’m always happy to exchange ideas.",
    },
    zh: {
      opening: "你好，我是 徐子琦，也可以叫我 Zoe。我目前就读于 伊利诺伊大学厄巴纳-香槟分校（UIUC），本科双专业为 统计学与精算学。",
      research: "我的本科研究关注如何运用定量方法解决有意义的现实问题，研究方向涵盖社会经济与人道主义援助、金融风险以及数学结构与建模。在 UIUC，我有幸与 Prof. Angela Lyons、Prof. Xiaochen Jing、Prof. Frank Quan 和 Prof. Yuliy Baryshnikov 开展研究与项目合作。",
      industry: "在行业实践中，我主要关注定量分析、产品定价、损失率分析、AI 模型训练与数据可视化，并将统计建模与机器学习应用于真实业务问题。",
      focusLead: "目前，我正在积极探索 Industry 与 Research 的机会，主要关注：",
      focuses: [
        { title: "Quantitative Research / Quantitative Analyst", description: "系统化交易策略、Alpha Research、因子研究、时间序列建模、风险建模、投资组合分析与市场微观结构。" },
        { title: "Modeling / Product Data Science", description: "商业增长与产品分析、Machine Learning、欺诈检测与风险建模、推荐系统、用户与客户细分、实验设计 / A/B Testing 与动态定价。" },
        { title: "Artificial Intelligence & Machine Learning", description: "AI Agents、Large Language Models、NLP、Machine Learning Systems、模型训练与评估，以及 AI 在真实业务与研究问题中的应用。" },
      ],
      statement: "我不怕困难和挑战，我比较害怕自己是一个暗淡的人。所以我希望自己持续学习，保持分享。",
      closing: "欢迎随时通过LinkedIn与我联系，期待与大家交流。",
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

export const projectCategories = [
  {
    title: text("Selected Projects", "精选项目"),
    description: text(
      "Project entries will be added as work becomes ready to share. The structure supports category, concise description, methods, and detail routes without inventing unfinished project content.",
      "项目完成并适合展示后将在此加入。该结构支持类别、简要说明、方法和详情路由，同时不会虚构尚未完成的项目内容。",
    ),
  },
];

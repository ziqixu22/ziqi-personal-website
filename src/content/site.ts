import { getStoredLanguage } from "../i18n/language";
import { localize } from "./types";
import type { Language, LocalizedText } from "./types";

export { getStoredLanguage, localize };
export type { Language, LocalizedText };

export type PageSlug = "home" | "experience" | "research-projects";
export type LinkedName = { name: string; url?: string };

const text = (en: string, zh: string): LocalizedText => ({ en, zh });

export const site = {
  name: "Ziqi Xu",
  role: text(
    "Actuarial Science · Statistics · Data Science · Quantitative Research",
    "精算科学 · 统计学 · 数据科学 · 定量研究",
  ),
  positioning:
    "Using statistics, computation, and quantitative thinking to turn complex real-world questions into clear, practical insight.",
  email: "ziqi12@illinois.edu",
  github: "https://github.com/ziqixu22",
  linkedin: "#",
  resumeNote: text("Resume available upon request.", "简历可按需提供。"),
};

export const pages: { slug: PageSlug; label: LocalizedText }[] = [
  { slug: "home", label: text("Home", "首页") },
  { slug: "experience", label: text("Experience", "经历") },
  { slug: "research-projects", label: text("Research & Projects", "研究与项目") },
];

export const home = {
  label: text("About", "关于我"),
  intro: [
    text(
      "I am a University of Illinois Urbana-Champaign student studying Actuarial Science and Statistics, interested in applying statistical modeling, machine learning, quantitative methods, and computation to real-world problems across insurance, data science, and research.",
      "我就读于伊利诺伊大学香槟分校，学习精算科学与统计学；我希望将统计建模、机器学习、定量方法与计算应用到保险、数据科学及研究中的真实问题。",
    ),
    text(
      "My work sits at the intersection of technical rigor and practical decision-making, especially where quantitative tools can make complex systems easier to understand.",
      "我关注技术严谨性与实际决策的交汇，尤其重视定量工具如何帮助人们理解复杂系统。",
    ),
    text(
      "I am particularly interested in insurance and risk, search and recommendation, and applied research.",
      "我尤其关注保险与风险、搜索与推荐，以及应用研究。",
    ),
  ],
  focus: [
    text("Statistical machine learning", "统计机器学习"),
    text("Quantitative modeling", "定量建模"),
    text("Search & recommendation", "搜索与推荐"),
    text("Insurance & risk", "保险与风险"),
    text("Applied research", "应用研究"),
  ],
  education: {
    school: "University of Illinois Urbana-Champaign",
    degree: text("Actuarial Science + Statistics", "精算科学 + 统计学"),
    graduation: text("Expected graduation: December 2026", "预计毕业：2026 年 12 月"),
  },
  service: [text("Teaching, grading, and tutoring details to be added.", "教学、评分与辅导经历待补充。")],
  honors: [
    "State Farm Actuarial Science Scholarship",
    "Dean's List",
    "Illinois Statistics Datathon Honor Prize",
    "SOA Exams P, FM, SRM, FAM",
  ],
  beyond: text(
    "Outside coursework and research, this space can hold a few genuine interests—travel, fitness, books, photography, or what you are learning next.",
    "在课程与研究之外，这里可以保留少量真实兴趣，例如旅行、健身、阅读、摄影或正在学习的新事物。",
  ),
};

export const experience = [
  {
    company: "Lockton Re",
    role: text("Actuarial Intern, Reinsurance", "精算实习生，再保险"),
    location: "New York, NY",
    dates: text("June 2026 – July 2026", "2026 年 6 月 – 2026 年 7 月"),
    logoSrc: "/logos/lockton-re.png",
  },
  {
    company: "Chubb",
    role: text("Actuarial Intern, Quantitative Pricing", "精算实习生，定量定价"),
    location: "Jersey City, NJ",
    dates: text("May 2025 – December 2025", "2025 年 5 月 – 2025 年 12 月"),
    logoSrc: "/logos/chubb.png",
  },
  {
    company: "Scale AI",
    role: text("Technical Advisor Intern, Generative AI", "技术顾问实习生，生成式 AI"),
    location: "Remote",
    dates: text("February 2025 – May 2025", "2025 年 2 月 – 2025 年 5 月"),
    logoSrc: "/logos/scale-ai.png",
  },
  {
    company: "IDX Exchange",
    role: text("Data Scientist Intern", "数据科学实习生"),
    location: "Remote",
    dates: text("September 2024 – Present", "2024 年 9 月 – 至今"),
    logoSrc: "/logos/idx-exchange.png",
  },
  {
    company: "ILLINOIS ATLAS",
    role: text("Data Analyst Intern", "数据分析实习生"),
    location: "Urbana, IL",
    team: "Teaching and Learning with Technology",
    dates: text("August 2023 – December 2023", "2023 年 8 月 – 2023 年 12 月"),
    logoSrc: "/logos/atlas.png",
  },
];

export const research = [
  {
    role: text("Data Scientist Intern – ML SPIN", "数据科学实习生 – ML SPIN"),
    dates: text("June 2024 – May 2025", "2024 年 6 月 – 2025 年 5 月"),
    institution: { name: "National Center for Supercomputing Applications", url: "https://www.ncsa.illinois.edu/" },
    institutionUrl: "https://www.ncsa.illinois.edu/",
    advisors: [
      { name: "Angela Lyons", url: "https://csames.illinois.edu/directory/profile/anglyons" },
      { name: "Aiman Soliman", url: "https://aimansoliman.com/" },
    ] satisfies LinkedName[],
    logoSrc: "/logos/ncsa.png",
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
  },
  {
    role: text("Research Assistant – Actuarial Science", "研究助理 – 精算科学"),
    dates: text("January 2025 – May 2025", "2025 年 1 月 – 2025 年 5 月"),
    institution: { name: "Illinois Risk Lab", url: "https://asrm.illinois.edu/illinois-risk-lab/illinois-risk-lab-home" },
    institutionUrl: "https://asrm.illinois.edu/illinois-risk-lab/illinois-risk-lab-home",
    collaborators: { name: "Reinsurance Group of America (RGA)", url: "https://www.rgare.com/" },
    advisors: [
      { name: "Xiaochen Jing", url: "https://math.illinois.edu/directory/profile/xjing4" },
      { name: "Frank Quan", url: "https://www.zhiyuquan.net/" },
      { name: "Tim Cardinal" },
      { name: "RGA GFS Valuation EMEA Team" },
    ] satisfies LinkedName[],
    logoSrc: "/logos/illinois-risk-lab.png",
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
    advisors: [{ name: "Yuliy Baryshnikov", url: "https://ymb.web.illinois.edu/" }] satisfies LinkedName[],
    logoSrc: "/logos/illinois-math-lab.png",
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
    projectUrl: "https://ymb.web.illinois.edu/teaching/past-teaching/igl-projects-s22/#dds",
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

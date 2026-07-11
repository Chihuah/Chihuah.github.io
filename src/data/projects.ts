/**
 * Shared Projects Data (SSOT)
 * All research grants, teaching practice projects, industry collaborations,
 * and compute support. Research page filters by kind; timeline derives events.
 */

export type ProjectKind =
  | 'nstc-pi'
  | 'nstc-student'
  | 'moe-teaching'
  | 'industry'
  | 'compute'

export type TimelineActivityType =
  | 'research'
  | 'teaching'
  | 'publication'
  | 'award'
  | 'collaboration'
  | 'graduation'
  | 'speech'

export interface Project {
  id: string
  kind: ProjectKind
  title: string
  titleEn: string
  /** ISO-like date: YYYY-MM-DD or YYYY-MM */
  startDate: string
  endDate?: string
  funding?: string
  /** Compute / non-cash support description */
  support?: string
  partner?: string
  student?: string
  description?: string
  descriptionEn?: string
  /** Include in Activities / Home timeline (default true) */
  showInTimeline?: boolean
  /** Override timeline sort date; defaults to startDate */
  timelineDate?: string
  /** Override timeline activity type; defaults from kind mapping */
  timelineType?: TimelineActivityType
}

const KIND_TIMELINE_TYPE: Record<ProjectKind, TimelineActivityType> = {
  'nstc-pi': 'research',
  'nstc-student': 'teaching',
  'moe-teaching': 'research',
  industry: 'collaboration',
  compute: 'award',
}

/** Format period for Research page display (e.g. 2016/08/01 - 2017/07/31) */
export function formatPeriod(startDate: string, endDate?: string): string {
  const formatPart = (d: string): string => {
    const parts = d.split('-')
    if (parts.length === 2) {
      // YYYY-MM
      return `${parts[0]}/${parts[1]}`
    }
    if (parts.length >= 3) {
      return `${parts[0]}/${parts[1]}/${parts[2]}`
    }
    return d
  }

  if (!endDate) {
    return formatPart(startDate)
  }
  return `${formatPart(startDate)} - ${formatPart(endDate)}`
}

/** Display title: bilingual combined when Chinese and English differ */
export function formatProjectTitle(project: Project): string {
  if (project.title && project.titleEn && project.title !== project.titleEn) {
    return `${project.title} (${project.titleEn})`
  }
  return project.title || project.titleEn
}

export function getTimelineType(project: Project): TimelineActivityType {
  return project.timelineType ?? KIND_TIMELINE_TYPE[project.kind]
}

export function getProjectsByKind(kind: ProjectKind): Project[] {
  return projectsData
    .filter((p) => p.kind === kind)
    .sort((a, b) => b.startDate.localeCompare(a.startDate))
}

export const projectsData: Project[] = [
  // --- compute ---
  {
    id: 'compute-nvidia-2026',
    kind: 'compute',
    title: 'NVIDIA Academic Grant Program',
    titleEn: 'NVIDIA Academic Grant Program',
    startDate: '2026-04',
    endDate: '2026-09',
    support: '32K A100 GPU-hours on Brev',
    description:
      '獲得 NVIDIA Academic Grant Program 計算資源補助，提供 32K A100 GPU-hours on Brev。',
    descriptionEn:
      'Received an NVIDIA Academic Grant Program compute grant (32K A100 GPU-hours on Brev) to support research on physically interpretable protein structure tokenization and geometric deep learning for structural biology.',
  },

  // --- moe-teaching ---
  {
    id: 'moe-teaching-2026-heros-journey-ai',
    kind: 'moe-teaching',
    title: '從動機到精熟：英雄旅程式鷹架與AI導師協同的程式設計教學創新',
    titleEn:
      "From Motivation to Mastery: Programming Education Innovation through Hero's Journey Scaffolding and AI Mentorship",
    startDate: '2026-08-01',
    endDate: '2027-07-31',
    description:
      '獲得教育部教學實踐研究計畫，以英雄旅程敘事鷹架結合 AI 導師「梅林」，在大一 Java 程式設計課程建立動機與認知雙層鷹架，檢驗計算思維、學習動機與不同起點學生之學習成效。',
    descriptionEn:
      "Awarded Ministry of Education Teaching Practice Research Project integrating Hero's Journey narrative scaffolding with an AI mentor (Merlin) in first-year Java programming, building dual motivational and cognitive scaffolds to evaluate computational thinking, motivation, and learning outcomes across students with different starting points.",
  },
  {
    id: 'moe-teaching-2025-gamified-ai',
    kind: 'moe-teaching',
    title: '從學習評分到角色養成：生成式AI支持下的遊戲化教學實踐',
    titleEn:
      'From Learning Assessment to Character Development: Gamified Teaching Practices Powered by Generative AI',
    startDate: '2025-08-01',
    endDate: '2026-07-31',
    funding: 'NTD 250,000',
    description:
      '獲得教育部教學實踐研究計畫，結合遊戲化設計與生成式AI技術，探索創新學習評分機制在人工智慧概論課程中的應用，透過虛擬角色成長系統增強學生學習動機與參與度',
    descriptionEn:
      'Awarded Ministry of Education Teaching Practice Research Project, combining gamified design and generative AI to explore innovative learning assessment mechanisms in AI coursework, enhancing student motivation and engagement through virtual character development system',
  },

  // --- nstc-student ---
  {
    id: 'nstc-student-2025-rag-medication',
    kind: 'nstc-student',
    title: '基於生成式 AI 與檢索增強技術之醫療資訊檢索效能研究(以用藥安全為例)',
    titleEn:
      'Medical Information Retrieval Performance Using Generative AI and Retrieval-Augmented Generation Technology: A Case Study on Medication Safety',
    startDate: '2025-07-01',
    endDate: '2026-02-28',
    student: '翁甄薇',
    description:
      '輔導學生進行基於生成式 AI 與檢索增強技術之醫療資訊檢索效能研究(以用藥安全為例)的研究專案',
    descriptionEn:
      'Supervising student research on medical information retrieval performance using generative AI and retrieval-augmented generation (RAG) technology, with medication safety as a case study',
  },
  {
    id: 'nstc-student-2024-llm-records',
    kind: 'nstc-student',
    title:
      '利用大型語言模型提升病歷分類準確性與效率的研究 -- 訓練醫療大型語言模型應用至醫療檢閱平台',
    titleEn:
      'Research on Improving Medical Record Classification Accuracy Using Large Language Models',
    startDate: '2024-07-01',
    endDate: '2025-02-28',
    student: '黎芷妤',
    description: '輔導學生進行利用大型語言模型提升病歷分類準確性與效率的研究專案',
    descriptionEn:
      'Supervising student research on improving medical record classification accuracy using large language models',
  },

  // --- industry ---
  {
    id: 'industry-2025-diabetes-aiot',
    kind: 'industry',
    title: '串接AIoT與健康存摺數據的糖尿病照護AI微服務研發計畫',
    titleEn:
      'AI Microservices for Diabetes Care Integrating AIoT and Health Records',
    startDate: '2025-06-01',
    endDate: '2026-05-31',
    funding: 'NTD 580,000',
    partner: '安捷康生醫股份有限公司 (AJK Biomedical Inc.)',
    description:
      '與安捷康生醫股份有限公司合作開發智慧控糖照護系統，結合智慧手環即時蒐集患者生理數據，透過AI模型提供個人化運動建議、飲食辨識與血糖趨勢預測功能',
    descriptionEn:
      'Industry-academia collaboration with AJK Biomedical Inc. to develop an intelligent diabetes care system that integrates smart wearables for real-time physiological data collection, AI-powered personalized exercise recommendations, dietary image recognition, and blood glucose prediction',
  },
  {
    id: 'industry-2019-ant-diary',
    kind: 'industry',
    title: '整合影像辨識分析螞蟻成長過程-螞蟻生態日記服務平台',
    titleEn:
      'Integrated Image Recognition and Analysis of Ant Growth: An Ant Ecological Diary Service Platform',
    startDate: '2019-10-01',
    endDate: '2020-07-31',
    funding: 'NTD 500,000',
    partner: 'Empire of ants 螞蟻帝國',
    description: '與Empire of ants 螞蟻帝國合作的產學專案順利完成',
    descriptionEn:
      'Industry-academia collaboration project with Empire of Ants successfully completed',
  },

  // --- nstc-pi (formerly MOST / mostProjects) ---
  {
    id: 'nstc-pi-2026-sa-xl',
    kind: 'nstc-pi',
    title: 'SA-XL：基於κ-α幾何約束之可學習蛋白質結構字元集',
    titleEn:
      'SA-XL: A Learnable Protein Structural Alphabet with κ-α Geometric Constraints',
    startDate: '2026-08-01',
    endDate: '2027-07-31',
    description:
      '獲得國科會專題研究計畫，開發 SA-XL：以 Geometry-Aware VQ-VAE 將 (κ, α) 幾何參數作為歸納偏置，結合 SE(3)-等變圖神經網路，建立兼具物理可解釋性與可學習性的蛋白質結構字元集，支援大規模結構搜尋與遠程同源偵測。',
    descriptionEn:
      'NSTC research project developing SA-XL, a learnable and physically interpretable protein structural alphabet via a Geometry-Aware VQ-VAE that embeds (κ, α) geometric constraints into an SE(3)-equivariant framework, supporting large-scale structure search and remote homology detection.',
  },
  {
    id: 'nstc-pi-2016-disease-usa',
    kind: 'nstc-pi',
    title:
      'Developing disease-USA network with weighted RWR score for protein pathogenic prediction',
    titleEn:
      'Developing disease-USA network with weighted RWR score for protein pathogenic prediction',
    startDate: '2016-08-01',
    endDate: '2017-07-31',
    funding: 'NTD 423,000',
    description:
      'Developing disease-USA network with weighted RWR score for protein pathogenic prediction順利完成',
    descriptionEn:
      'Successfully completed "Developing disease-USA network with weighted RWR score for protein pathogenic prediction"',
  },
  {
    id: 'nstc-pi-2012-distance-motif',
    kind: 'nstc-pi',
    title:
      'Structure-Oriented Distance Motif for Protein Functions Prediction and Annotation',
    titleEn:
      'Structure-Oriented Distance Motif for Protein Functions Prediction and Annotation',
    startDate: '2012-08-01',
    endDate: '2013-07-31',
    funding: 'NTD 528,000',
    description: 'Structure-Oriented Distance Motif for Protein Functions Prediction專案完成',
    descriptionEn:
      'Successfully completed "Structure-Oriented Distance Motif for Protein Functions Prediction" project',
  },
  {
    id: 'nstc-pi-2012-structural-units-pharma',
    kind: 'nstc-pi',
    title: 'Networks of Protein Structural Units in Pharmaceutical Applications',
    titleEn: 'Networks of Protein Structural Units in Pharmaceutical Applications',
    startDate: '2012-01-01',
    endDate: '2012-07-31',
    funding: 'NTD 500,000',
    description: '科技部計畫：蛋白質結構單元網路於藥物應用研究',
    descriptionEn:
      'MOST/NSTC project on networks of protein structural units in pharmaceutical applications',
  },
]

// 基本類型定義
export interface PersonalInfo {
  name: string
  nameEn: string
  edudegree: string
  title: string
  titleEn: string
  institution: string
  institutionEn: string
  email: string
  phone: string
  address: string
  photo: string
}

// 出版品類型
export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  month?: number
  volume?: string
  pages?: string
  doi?: string
  url?: string
  type: 'journal' | 'conference' | 'book' | 'patent'
  sciRanking?: string
}

// 研究項目類型
export interface ResearchProject {
  id: string
  title: string
  description: string
  category: string
  startYear: number
  endYear?: number
  collaborators?: string[]
  publications?: string[]
  image?: string
  url?: string
}

// 課程類型
export interface Course {
  id: string
  name: string
  nameEn?: string
  semester: string
  year: number
  credits?: number
  description?: string
  syllabus?: string
  isEnglish?: boolean
}

// 實驗室成員類型
export interface LabMember {
  id: string
  name: string
  nameEn?: string
  position: 'professor' | 'postdoc' | 'phd' | 'master' | 'undergraduate' | 'alumni'
  year?: number
  thesisTitle?: string
  currentPosition?: string
  email?: string
  photo?: string
  researchInterests?: string[]
}

// 學術活動類型
export interface Activity {
  id: string
  title: string
  type: 'conference' | 'lecture' | 'workshop' | 'visit' | 'lab_activity'
  date: string
  location?: string
  description?: string
  images?: string[]
  url?: string
}

// 獎項類型
export interface Award {
  id: string
  title: string
  year: number
  organization: string
  description?: string
  image?: string
}

// 導航項目類型
export interface NavItem {
  name: string
  path: string
  icon?: string
}


import { PersonalInfo, NavItem } from '../types'

export const personalInfo: PersonalInfo = {
  name: '董其樺',
  nameEn: 'Chi-Hua Tung',
  title: '副教授',
  titleEn: 'Associate Professor',
  institution: '輔仁大學醫學資訊與創新應用學士學位學程',
  institutionEn: 'Program of Medical Informatics and Innovative Applications, Fu Jen Catholic University',
  email: 'chihua.tung.fju@gmail.com',
  phone: '+886-2-29052928',
  address: 'Room SF212, No.510, Zhongzheng Rd., Xinzhuang Dist., New Taipei City 242062, Taiwan (R.O.C.)',
  photo: '/src/assets/profile.jpg'
}

export const navItems: NavItem[] = [
  { name: '首頁', path: '/', icon: 'Home' },
  { name: '關於我', path: '/about', icon: 'User' },
  { name: '研究成果', path: '/research', icon: 'Search' },
  { name: '出版品', path: '/publications', icon: 'BookOpen' },
  { name: '教學課程', path: '/teaching', icon: 'GraduationCap' },
  { name: '實驗室成員', path: '/members', icon: 'Users' },
  { name: '學術活動', path: '/activities', icon: 'Calendar' },
  { name: '聯絡方式', path: '/contact', icon: 'Mail' }
]


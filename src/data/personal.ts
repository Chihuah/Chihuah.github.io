import { PersonalInfo, NavItem } from '../types'

export const personalInfo: PersonalInfo = {
  name: '董其樺',
  nameEn: 'Chi-Hua Tung',
  edudegree: 'Ph.D.',
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
  { name: 'Home', path: '/', icon: 'Home' },
  { name: 'About', path: '/about', icon: 'User' },
  { name: 'Research', path: '/research', icon: 'Search' },
  { name: 'Publications', path: '/publications', icon: 'BookOpen' },
  { name: 'Teaching', path: '/teaching', icon: 'GraduationCap' },
  { name: 'Lab Members', path: '/members', icon: 'Users' },
  { name: 'Activities', path: '/activities', icon: 'Calendar' }
]


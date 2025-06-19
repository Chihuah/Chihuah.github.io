import React from 'react'
import { Download, Award, GraduationCap, Briefcase, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useSEO } from '../hooks/useSEO'

const About: React.FC = () => {
  // SEO optimization
  useSEO({
    title: 'About Chi-Hua Tung - Academic Background & Research Experience',
    description: 'Learn about Associate Professor Chi-Hua Tung\'s academic background, research experience in bioinformatics, and professional achievements at Fu Jen Catholic University.',
    keywords: 'Chi-Hua Tung biography, academic background, bioinformatics research, Fu Jen Catholic University, medical informatics education',
    ogTitle: 'About Chi-Hua Tung - Academic Profile',
    ogDescription: 'Explore the academic journey and research expertise of Associate Professor Chi-Hua Tung in bioinformatics and computational biology.'
  })

  // Experience data
  const experiences = [
    {
      title: 'Associate Professor',
      period: 'Since 2021/08',
      organization: 'Program of Medical Informatics and Innovative Applications, Fu Jen Catholic University, Taiwan',
      type: 'current'
    },
    {
      title: 'Associate Professor',
      period: '2019/08-2021/07',
      organization: 'Department of Optoelectronics & Materials Engineering, Chung-Hua University, Taiwan',
      type: 'past'
    },
    {
      title: 'Chairman',
      period: '2018/08-2021/07',
      organization: 'Department of Bioinformatics, Chung-Hua University, Taiwan',
      type: 'past'
    },
    {
      title: 'Associate Professor',
      period: '2018/02-2019/07',
      organization: 'Department of Bioinformatics, Chung-Hua University, Taiwan',
      type: 'past'
    },
    {
      title: 'Assistant Professor',
      period: '2011/02-2018/01',
      organization: 'Department of Bioinformatics, Chung-Hua University, Taiwan',
      type: 'past'
    },
    {
      title: 'Postdoctoral researcher',
      period: '2010/10-2011/01',
      organization: 'Institute of Bioinformatics and Systems Biology, National Chiao Tung University, Taiwan',
      type: 'past'
    },
    {
      title: 'Special researcher',
      period: '2008/07-2008/09',
      organization: 'Department of Complex Systems, Future University-Hakodate, Japan',
      type: 'past'
    }
  ]

  // Education data
  const education = [
    {
      degree: 'Ph.D',
      period: '2005-2009',
      institution: 'Institute of Bioinformatics and Systems Biology, National Chiao Tung University, Taiwan',
      thesis: 'A Study of Relationships between Protein Structures and Functions Using a Structural Alphabet',
      supervisor: 'Prof. Jinn-Moon Yang'
    },
    {
      degree: 'M.S.',
      period: '2002-2005',
      institution: 'Institute of Bioinformatics and Systems Biology, National Chiao Tung University, Taiwan'
    },
    {
      degree: 'B.S.',
      period: '1998-2002',
      institution: 'Department of Biological Sciences, National Sun Yat-Sen University, Taiwan'
    }
  ]

  // Awards data
  const awards = [
    {
      year: '2016',
      title: 'WORLD GENIUS CONVENTION',
      subtitle: '第三十屆日本東京創新天才發明展 金牌',
      type: 'international'
    },
    {
      year: '2014',
      title: '43rd INTERNATIONAL EXHIBITION of INVENTIONS of GENEVA',
      subtitle: '瑞士日內瓦國際發明展 銅牌',
      type: 'international'
    },
    {
      year: '2014',
      title: 'X INTERNATIONAL SALON of INVENTIONS and NEW TECHNOLOGIES',
      subtitle: '烏克蘭國際發明展 銀牌',
      type: 'international'
    },
    {
      year: '2014',
      title: 'XVII Archimedes, the 17th Moscow International Salon of Inventions and Innovative Technologies',
      subtitle: '莫斯科阿基米德國際發明展 銅牌',
      type: 'international'
    }
  ]

  // Teaching honors
  const teachingHonors = [
    { year: '2015', title: 'Best Mentor', detail: '103學年度 優良導師' },
    { year: '2014', title: 'Best Mentor', detail: 'Second semester, 102學年度 第2學期 優良導師' },
    { year: '2014', title: 'Best Mentor', detail: 'First semester, 102學年度 第1學期 優良導師' },
    { year: '2013', title: 'Outstanding Teacher', detail: 'First semester, 101學年度 第1學期 教學優良教師' },
    { year: '2013', title: 'Best Mentor', detail: 'First semester, 101學年度 第1學期 優良導師' },
    { year: '2012', title: 'Best Mentor', detail: 'Second semester, 100學年度 第2學期 優良導師' },
    { year: '2011', title: 'Best Mentor', detail: 'Second semester, 99學年度 第2學期 優良導師' }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Principal Investigator</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic background, professional experience, and achievements in bioinformatics and computational biology research.
          </p>
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Professional Experience</h2>
            <p className="text-slate-600">Academic and research positions throughout my career</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-fju-secondary"></div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                    exp.type === 'current' 
                      ? 'bg-fju-primary border-fju-primary' 
                      : 'bg-white border-fju-secondary'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <div className={`p-3 rounded-lg border-l-4 ${
                      exp.type === 'current' 
                        ? 'border-l-fju-primary bg-fju-primary/5' 
                        : 'border-l-fju-secondary bg-white'
                    } shadow-sm`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                        <Badge variant="outline" className={
                          exp.type === 'current' 
                            ? 'bg-fju-primary/10 text-fju-primary text-xs' 
                            : 'bg-fju-secondary/10 text-fju-secondary text-xs'
                        }>
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm">{exp.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Horizontal Timeline */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Education</h2>
            <p className="text-slate-600">Academic background and qualifications</p>
          </div>

          <div className="relative">
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-fju-accent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-fju-accent border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content card */}
                  <div className="p-4 rounded-lg border-l-4 border-l-fju-accent bg-white shadow-sm mt-8 md:mt-24">
                    <div className="text-center md:text-left">
                      <div className="flex flex-col md:items-center mb-2">
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{edu.degree}</h3>
                        <Badge variant="outline" className="bg-fju-accent/10 text-fju-accent text-xs w-fit">
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{edu.institution}</p>
                      {edu.thesis && (
                        <p className="text-xs text-slate-500 mb-1">
                          <strong>Thesis:</strong> {edu.thesis}
                        </p>
                      )}
                      {edu.supervisor && (
                        <p className="text-xs text-slate-500">
                          <strong>Supervisor:</strong> {edu.supervisor}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Compact */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Awards and Honors</h2>
            <p className="text-slate-600">Recognition for innovation and research excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {awards.map((award, index) => (
              <Card key={index} className="border-l-4 border-l-fju-primary">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <CardTitle className="text-base text-slate-900 leading-tight">{award.title}</CardTitle>
                      <CardDescription className="text-sm text-slate-600">{award.subtitle}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-fju-primary/10 text-fju-primary text-xs">
                      {award.year}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Honors Section - Compact */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Teaching and Mentoring Honors</h2>
            <p className="text-slate-600">Recognition for excellence in teaching and student mentoring</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {teachingHonors.map((honor, index) => (
              <Card key={index} className="border-l-4 border-l-fju-secondary">
                <CardHeader className="pb-2 pt-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm text-slate-900">{honor.title}</CardTitle>
                      <Badge variant="outline" className="bg-fju-secondary/10 text-fju-secondary text-xs">
                        {honor.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs text-slate-600 leading-tight">{honor.detail}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Development Certification - Compact */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Professional Certification</h2>
            <p className="text-slate-600">Additional qualifications and professional development</p>
          </div>

          <Card className="border-l-4 border-l-fju-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-slate-900">National Career Development Association</CardTitle>
              <CardDescription className="text-fju-accent font-medium">Career Development Advisor</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-slate-700 text-sm leading-relaxed">
                In 2015, I received the National Career Development Association (NCDA) training to learn the knowledge and skills related to career development, which is used to guide students to plan their career after school and graduation, so that they can get suitable jobs in the future. I have obtained the certification of international career development advisor (CDA). Up to now, I have conducted career development counseling for over 60 students.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default About


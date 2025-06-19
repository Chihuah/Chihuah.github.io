import React, { useState } from 'react'
import { Calendar, Filter, BookOpen, Award, Users, Microscope, GraduationCap, Building, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useSEO } from '../hooks/useSEO'

interface Activity {
  date: string
  type: 'research' | 'teaching' | 'publication' | 'award' | 'collaboration' | 'graduation' | 'speech'
  title: string
  description: string
  details?: string
  location?: string
  participants?: string[]
  funding?: string
}

const Activities: React.FC = () => {
  // SEO optimization
  useSEO({
    title: 'Lab Activities - Research Timeline & Achievements',
    description: 'Explore the comprehensive timeline of research activities, academic achievements, and milestones of Chi-Hua Tung\'s Intelligent Bioinformatics Lab from 2013-2025.',
    keywords: 'lab activities, research timeline, academic achievements, bioinformatics milestones, research projects, academic collaboration',
    ogTitle: 'Lab Activities - Research Timeline',
    ogDescription: 'Comprehensive overview of research activities, publications, and academic milestones spanning over a decade of innovation.'
  })

  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const activitiesData: Activity[] = [
    // 2025
    {
      date: '2025-05',
      type: 'publication',
      title: 'Light Bladder Net論文發表',
      description: 'Non-invasive Bladder Cancer Prediction論文發表於Anticancer Research期刊',
      details: 'Developed Light-Bladder-Net, a lightweight deep learning model that combines data transformation and weighted voting techniques to achieve non-invasive bladder cancer prediction based on conventional urine examination, with 83% accuracy and a free online diagnostic tool.'
    },    
    
    // 2024
    {
      date: '2024-07',
      type: 'teaching',
      title: '國科會大專生研究計畫啟動',
      description: '輔導學生進行利用大型語言模型提升病歷分類準確性與效率的研究專案',
      details: '計畫期間：2024/07/01 - 2025/02/28，指導學生：黎芷妤'
    },

    // 2023
    {
      date: '2023-09',
      type: 'teaching',
      title: '新課程開設',
      description: 'Java程式設計、資料結構、演算法、醫療決策分析等新課程開始授課',
      details: '自2023年開始，新授多門必修課程'
    },
    {
      date: '2023-03',
      type: 'teaching',
      title: '開設英語授課課程',
      description: '人工智慧概論 開始授課',
      details: '自2023年第一學期開始的全英語課程'
    },

    // 2022
    {
      date: '2022-06',
      type: 'graduation',
      title: '螞蟻巢穴圖片辯識之深度學習系統專題完成',
      description: '輔大資工系學生完成螞蟻巢穴深度學習圖片辯識系統專題',
      participants: ['吳依穎', '葉庭豪', '姚冠宇', '林胤軒']
    },

    // 2021
    {
      date: '2021-08',
      type: 'publication',
      title: 'NIgPred論文發表',
      description: 'Class-Specific Antibody Prediction for Linear B-Cell Epitopes論文發表於Viruses期刊',
      details: 'Developed NIgPred, a novel machine learning tool that integrates heterogeneous features and 60 classifiers with genetic algorithm-based feature selection to predict class-specific antibodies (IgA, IgE, IgG) for linear B-cell epitopes, achieving superior performance over existing tools and 100% accuracy on coronavirus IgG epitope prediction.'
    },
    {
      date: '2021-08',
      type: 'publication',
      title: 'Borneol dehydrogenase研究發表',
      description: 'Pseudomonas sp. TCU-HL1的新型quinuclidinone還原酶活性研究',
      details: 'Discovered that borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities, demonstrating its ability to convert 3-quinuclidinone to (R)-3-(-)-quinuclidinol and elucidating the structural basis for substrate specificity differences between BDH and QR through 3D molecular docking simulations.'
    },

    // 2020
    {
      date: '2020-07',
      type: 'collaboration',
      title: '螞蟻生態日記服務平台專案完成',
      description: '與Empire of ants 螞蟻帝國合作的產學專案順利完成',
      details: '專案期間：2019/10/01 - 2020/07/31',
      funding: 'NTD 500,000'
    },
    {
      date: '2020-04',
      type: 'publication',
      title: 'QUATgo論文發表',
      description: 'Protein quaternary structural attributes prediction system發表於PLoS ONE',
      details: 'Developed QUATgo, a two-stage machine learning tool that predicts protein quaternary structural attributes for oligomers with more than 12 subunits using heterogeneous feature encoding including dipeptide composition (first time applied to quaternary structure prediction), protein half-life characteristics, and modified functional domain composition, achieving 49.0% cross-validation accuracy and providing a freely accessible web server.'
    },
    {
      date: '2020-06',
      type: 'graduation',
      title: '肺部聽診與宿舍E化系統專題',
      description: '中華大學生物資訊系學生，林育均等人完成肺部疾病判斷專題，吳佩宜等人完成宿舍借取用品E化服務系統',
      participants: ['林育均', '潘昱伶', '趙翊筌', '吳佩宜', '李定奕', '溫國勛']
    },

    // 2019
    {
      date: '2019-06',
      type: 'graduation',
      title: '皮膚病變醫學影像辨識專題',
      description: '中華大學生物資訊系學生完成皮膚病變醫學影像辨識專題',
      participants: ['呂妮珈', '陳沛柔', '簡心潔', '王莉卉']
    },

    // 2018
    {
      date: '2018-12',
      type: 'publication',
      title: 'SUMOgo論文發表',
      description: 'Prediction of sumoylation sites on lysines by motif screening models發表於Scientific Reports',
      details: 'Developed SUMOgo, a Random Forest tool that predicts SUMOylation sites by integrating post-translational modification information as novel features, achieving 0.511 Matthew\'s correlation coefficient and outperforming existing tools.'
    },
    {
      date: '2018-06',
      type: 'graduation',
      title: '碩士班學生郭家豪畢業',
      description: '完成碩士論文',
      participants: ['郭家豪']
    },
    {
      date: '2018-06',
      type: 'graduation',
      title: 'AI影像辨識專題成果',
      description: '李蕙汝等完成英漢翻譯專題，陳紘睿等完成台灣常見螞蟻深度學習影像辨識',
      participants: ['李蕙汝', '高慈敏', '陳紘睿', '洪愷俐', '吳佩琦']
    },
    {
      date: '2018-05',
      type: 'speech',
      title: '逢甲大學學術演講',
      description: 'Analysis of Human Pathogenic Proteins using Local Structural Similarity Network',
      location: 'Department of Information Engineering and Computer Science, Feng Chia University'
    },

    // 2017
    {
      date: '2017-06',
      type: 'publication',
      title: 'REALoc論文發表',
      description: 'Predicting human protein subcellular localization by heterogeneous approaches',
      details: '與Chi-Wei Chen, Han-Hao Sun, Yen-Wei Chu等人合作，發表於PLoS ONE'
    },
    {
      date: '2017-06',
      type: 'graduation',
      title: '智慧系統與教具開發專題',
      description: '多組學生完成智慧自走車、機器人教具、桌遊設計等創新專題',
      participants: ['陳柏宇', '王宗豪', '鄭宜彥', '張正霖', '洪芸璇', '蔡佩衿', '陳珈慧']
    },
    {
      date: '2017-07',
      type: 'research',
      title: '科技部病理蛋白預測研究計畫結案',
      description: 'Developing disease-USA network with weighted RWR score for protein pathogenic prediction順利完成',
      details: '計畫期間：2016/08/01 - 2017/07/31',
      funding: 'NTD 423,000'
    },

    // 2016
    {
      date: '2016-12',
      type: 'publication',
      title: 'QuaBingo論文發表',
      description: 'A Prediction System for Protein Quaternary Structure Attributes Using Block Composition',
      details: '與Chi-Wei Chen, Ren-Chao Guo, Hui-Fuang Ng, Yen-Wei Chu等人合作，發表於BioMed Research International'
    },
    {
      date: '2016-06',
      type: 'graduation',
      title: '顏子維、郭柄良、葉王祥綜碩士畢業',
      description: '三位碩士生分別完成蛋白質片段比對、自然語言處理、文字探勘與文件分類等研究',
      participants: ['顏子維', '郭柄良', '葉王祥綜']
    },

    // 2015
    {
      date: '2015-06',
      type: 'graduation',
      title: '陳冠甫碩士畢業',
      description: '完成「Improving Prediction of Human Disease Proteins using Local Structural Similarity Network」碩士論文研究',
      participants: ['陳冠甫']
    },

    // 2014
    {
      date: '2014-06',
      type: 'graduation',
      title: '莊利偉碩士畢業',
      description: '完成「A Study of Residue Contact Number Among the Amino Acid and Structural Alphabet」碩士論文研究',
      participants: ['莊利偉']
    },

    // 2013
    {
      date: '2013-06',
      type: 'graduation',
      title: '首屆三位碩士生畢業',
      description: '楊凱傑、葉融、張日旭三位碩士生順利畢業，開啟實驗室人才培育里程碑',
      participants: ['楊凱傑', '葉融', '張日旭']
    },
    {
      date: '2013-06',
      type: 'speech',
      title: '慈濟大學學術演講',
      description: 'A Complex Network Approach for the Analysis of Protein Units Similarity Using Structural Alphabet',
      location: 'Department of Medical Informatics, Tzu Chi University'
    },
    {
      date: '2013-07',
      type: 'research',
      title: '科技部計畫結構導向距離模體研究結案',
      description: 'Structure-Oriented Distance Motif for Protein Functions Prediction專案完成',
      details: '專案期間：2012/08/01 - 2013/07/31',
      funding: 'NTD 528,000'
    }
  ]

  // 自動排序和處理活動資料
  const processedActivities = activitiesData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((activity, index) => ({
      ...activity,
      id: `${activity.date}-${activity.type}-${index}` // 自動生成ID
    }))

  const categories = [
    { id: 'all', label: 'All 全部活動', icon: Calendar, color: 'bg-slate-100 text-slate-700' },
    { id: 'research', label: 'Research 研究專案', icon: Microscope, color: 'bg-fju-primary/10 text-fju-primary' },
    { id: 'teaching', label: 'Teaching 教學活動', icon: Users, color: 'bg-fju-secondary/10 text-fju-secondary' },
    { id: 'publication', label: 'Publication 學術發表', icon: BookOpen, color: 'bg-fju-accent/10 text-fju-accent' },
    { id: 'graduation', label: 'Graduation 學生畢業', icon: GraduationCap, color: 'bg-green-100 text-green-700' },
    { id: 'collaboration', label: 'Collaboration 產學合作', icon: Building, color: 'bg-orange-100 text-orange-700' },
    { id: 'speech', label: 'Speech 學術演講', icon: Award, color: 'bg-purple-100 text-purple-700' }
  ]

  const getActivityTypeColor = (type: string) => {
    const colorMap = {
      research: 'border-fju-primary bg-fju-primary/5',
      teaching: 'border-fju-secondary bg-fju-secondary/5',
      publication: 'border-fju-accent bg-fju-accent/5',
      graduation: 'border-green-500 bg-green-50',
      collaboration: 'border-orange-500 bg-orange-50',
      speech: 'border-purple-500 bg-purple-50'
    }
    return colorMap[type as keyof typeof colorMap] || 'border-slate-300 bg-slate-50'
  }

  const getActivityIcon = (type: string) => {
    const iconMap = {
      research: Microscope,
      teaching: Users,
      publication: BookOpen,
      graduation: GraduationCap,
      collaboration: Building,
      speech: Award
    }
    return iconMap[type as keyof typeof iconMap] || Calendar
  }

  const filteredActivities = selectedCategory === 'all' 
    ? processedActivities 
    : processedActivities.filter(activity => activity.type === selectedCategory)

  // Group activities by year
  const activitiesByYear = filteredActivities.reduce((acc, activity) => {
    const year = activity.date.split('-')[0]
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(activity)
    return acc
  }, {} as Record<string, typeof processedActivities[0][]>)

  const years = Object.keys(activitiesByYear).sort((a, b) => parseInt(b) - parseInt(a))

  // Recent activities (last 6 months)
  const recentActivities = processedActivities
    .filter(activity => {
      const activityDate = new Date(activity.date)
      const sixMonthsAgo = new Date()
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
      return activityDate >= sixMonthsAgo
    })
    .slice(0, 6)

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-fju-primary to-fju-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Lab Activities</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our research milestones, academic achievements, and collaborative endeavors that drive innovation in bioinformatics and computational biology
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Activity Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => {
              const IconComponent = category.icon
              const isSelected = selectedCategory === category.id
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    isSelected 
                      ? 'bg-fju-primary hover:bg-fju-primary-dark' 
                      : `${category.color} border hover:bg-opacity-80`
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Recent Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentActivities.map(activity => {
              const IconComponent = getActivityIcon(activity.type)
              return (
                <Card key={activity.id} className={`hover:shadow-lg transition-shadow border-l-4 ${getActivityTypeColor(activity.type)}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-slate-600" />
                        <Badge variant="secondary" className="text-xs">
                          {activity.date}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">{activity.description}</p>
                    {activity.details && (
                      <p className="text-xs text-slate-500 mb-2">{activity.details}</p>
                    )}
                    {activity.participants && (
                      <div className="text-xs text-slate-500">
                        <span className="font-medium">參與者：</span>
                        {activity.participants.join(', ')}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activity Timeline */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Activity Timeline</h2>
          
          <div className="space-y-12">
            {years.map(year => (
              <div key={year}>
                <h3 className="text-2xl font-semibold text-fju-primary mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  {year}
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                  
                  <div className="space-y-6">
                    {activitiesByYear[year].map((activity, index) => {
                      const IconComponent = getActivityIcon(activity.type)
                      return (
                        <div key={activity.id} className="relative flex items-start gap-6">
                          {/* Timeline dot */}
                          <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-md ${getActivityTypeColor(activity.type)}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <Card className="hover:shadow-md transition-shadow">
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                  <CardTitle className="text-lg leading-tight">{activity.title}</CardTitle>
                                  <Badge variant="outline" className="text-xs">
                                    {activity.date}
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-slate-600 mb-3">{activity.description}</p>
                                {activity.details && (
                                  <p className="text-sm text-slate-500 mb-2">{activity.details}</p>
                                )}
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                  {activity.location && (
                                    <span>📍 {activity.location}</span>
                                  )}
                                  {activity.funding && (
                                    <span>💰 {activity.funding}</span>
                                  )}
                                  {activity.participants && (
                                    <span>👥 {activity.participants.join(', ')}</span>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activities


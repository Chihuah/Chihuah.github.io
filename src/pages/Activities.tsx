import React, { useState } from 'react'
import { Calendar, BookOpen, Award, Users, Microscope, GraduationCap, Building } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useSEO } from '../hooks/useSEO'
import { activitiesData } from '../data/activities'

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
      research: 'border-fju-primary bg-blue-50',
      teaching: 'border-fju-secondary bg-indigo-50',
      publication: 'border-fju-accent bg-cyan-50',
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
                  className={`flex items-center gap-2 ${isSelected
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
                    <CardTitle className="text-lg leading-tight mb-1">{activity.title}</CardTitle>
                    <p className="text-sm text-slate-500 italic">{activity.titleEn}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-2">{activity.description}</p>
                    <p className="text-sm text-slate-500 mb-3">{activity.descriptionEn}</p>
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
                    {activitiesByYear[year].map((activity) => {
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
                                  <div>
                                    <CardTitle className="text-lg leading-tight mb-1">{activity.title}</CardTitle>
                                    <p className="text-sm text-slate-500 italic">{activity.titleEn}</p>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {activity.date}
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-slate-600 mb-2">{activity.description}</p>
                                <p className="text-slate-500 mb-3">{activity.descriptionEn}</p>
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


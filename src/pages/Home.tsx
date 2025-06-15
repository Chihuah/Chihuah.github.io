import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Award, BookOpen, Users, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '../data/personal'

const Home: React.FC = () => {
  // 統計數據
  const stats = [
    { label: '期刊論文', value: '22+', icon: BookOpen },
    { label: '研究項目', value: '8+', icon: Search },
    { label: '指導學生', value: '15+', icon: Users },
    { label: '獲獎次數', value: '10+', icon: Award }
  ]

  // 研究亮點
  const highlights = [
    {
      title: 'Light Bladder Net',
      description: '基於深度學習的非侵入性膀胱癌預測系統',
      year: '2025',
      journal: 'Anticancer Research'
    },
    {
      title: 'NIgPred',
      description: '基於機器學習的抗體表位預測系統',
      year: '2021',
      journal: 'Viruses'
    },
    {
      title: 'QUATgo',
      description: '蛋白質四級結構屬性預測系統',
      year: '2020',
      journal: 'PLoS ONE'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-gray-600">{personalInfo.nameEn}</p>
                <p className="text-lg text-blue-600 font-medium">
                  {personalInfo.title}
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                專精於生物資訊學、機器學習在醫學的應用、蛋白質結構預測等領域。
                致力於開發創新的計算方法和預測系統，為蛋白質功能研究提供強大的計算工具。
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm">生物資訊學</Badge>
                <Badge variant="secondary" className="text-sm">機器學習</Badge>
                <Badge variant="secondary" className="text-sm">深度學習</Badge>
                <Badge variant="secondary" className="text-sm">蛋白質結構</Badge>
                <Badge variant="secondary" className="text-sm">醫學資訊</Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/about">
                    了解更多 <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  下載履歷
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-600">董</div>
                  </div>
                </div>
                {/* 裝飾性元素 */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">研究亮點</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              近年來在生物資訊學和機器學習領域的重要研究成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    <Badge variant="outline">{highlight.year}</Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-500">
                    {highlight.journal}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/research">
                查看所有研究 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新消息</h2>
            <p className="text-lg text-gray-600">
              實驗室的最新動態和學術活動
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>新論文發表</CardTitle>
                <CardDescription>2025年5月</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Light Bladder Net: Non-invasive Bladder Cancer Prediction" 
                  論文已在 Anticancer Research 期刊發表，提出了創新的膀胱癌預測方法。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>學術會議參與</CardTitle>
                <CardDescription>2024年12月</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  參與國際生物資訊學會議，發表關於深度學習在醫學診斷應用的最新研究成果。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/activities">
                查看所有活動 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


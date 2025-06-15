import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Award, BookOpen, Users, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '../data/personal'

const Home: React.FC = () => {
  // Statistics
  const stats = [
    { label: 'Journal Papers', value: '22+', icon: BookOpen },
    { label: 'Research Projects', value: '8+', icon: Search },
    { label: 'Students Supervised', value: '15+', icon: Users },
    { label: 'Awards Received', value: '10+', icon: Award }
  ]

  // Research Highlights
  const highlights = [
    {
      title: 'Light Bladder Net',
      description: 'Deep learning-based non-invasive bladder cancer prediction system',
      year: '2025',
      journal: 'Anticancer Research'
    },
    {
      title: 'NIgPred',
      description: 'Machine learning-based antibody epitope prediction system',
      year: '2021',
      journal: 'Viruses'
    },
    {
      title: 'QUATgo',
      description: 'Protein quaternary structure attribute prediction system',
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
                  {personalInfo.nameEn}
                </h1>
                <p className="text-xl text-gray-600">{personalInfo.name}</p>
                <p className="text-lg text-blue-600 font-medium">
                  {personalInfo.titleEn}
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed text-wrap">
                Specializing in bioinformatics, machine learning applications in medicine, and protein structure prediction. 
                Committed to developing innovative computational methods and prediction systems to provide powerful computational tools for protein function research.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm">Bioinformatics</Badge>
                <Badge variant="secondary" className="text-sm">Machine Learning</Badge>
                <Badge variant="secondary" className="text-sm">Deep Learning</Badge>
                <Badge variant="secondary" className="text-sm">Protein Structure</Badge>
                <Badge variant="secondary" className="text-sm">Medical Informatics</Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/about">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-600">T</div>
                  </div>
                </div>
                {/* Decorative elements */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-wrap">
              Recent significant research achievements in bioinformatics and machine learning
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
                  <p className="text-gray-700 text-wrap">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/research">
                View All Research <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-lg text-gray-600">
              Latest updates and academic activities from the lab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>New Publication</CardTitle>
                <CardDescription>May 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-wrap">
                  "Light Bladder Net: Non-invasive Bladder Cancer Prediction" 
                  has been published in Anticancer Research, proposing an innovative bladder cancer prediction method.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conference Participation</CardTitle>
                <CardDescription>December 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-wrap">
                  Participated in the International Bioinformatics Conference, presenting the latest research findings on deep learning applications in medical diagnosis.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/activities">
                View All Activities <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


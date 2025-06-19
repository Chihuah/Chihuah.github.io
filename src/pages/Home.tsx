import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Award, BookOpen, Users, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '../data/personal'

const Home: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState(true)

  // Conditional import for profile image
  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        // Try to import the image from assets
        // Vite will handle the path transformation during build
        const imageModule = await import('../assets/profile.jpg')
        setProfileImage(imageModule.default)
        console.log('Profile image loaded successfully from assets')
      } catch (error) {
        console.log('Profile image not found in assets, using fallback')
        setProfileImage(null)
      } finally {
        setImageLoading(false)
      }
    }

    loadProfileImage()
  }, [])

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
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #124e79 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  {personalInfo.name} {personalInfo.nameEn}, {personalInfo.edudegree}
                </h1>
                <p className="text-lg text-fju-primary font-medium">
                  {personalInfo.titleEn}
                </p>
                <p className="text-xl text-slate-600">Principal Investigator</p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed text-wrap">
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
                <Button asChild className="bg-fju-primary hover:bg-fju-primary-dark">
                  <Link to="/about">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-fju-secondary text-fju-secondary hover:bg-fju-secondary hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-92 h-92 bg-gradient-to-br from-fju-secondary to-fju-primary rounded-full flex items-center justify-center">
                  <div className="w-85 h-85 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    {imageLoading ? (
                      // Loading state
                      <div className="text-6xl font-bold text-fju-primary animate-pulse">T</div>
                    ) : profileImage ? (
                      // Profile image found
                      <img 
                        src={profileImage} 
                        alt="Chi-Hua Tung Profile" 
                        className="w-full h-full object-cover rounded-full"
                        onError={() => {
                          console.log('Image failed to load after import, using fallback')
                          setProfileImage(null)
                        }}
                      />
                    ) : (
                      // Fallback to T letter
                      <div className="text-6xl font-bold text-fju-primary">T</div>
                    )}
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 left-10 w-8 h-8 bg-fju-secondary/80 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-fju-accent/50 rounded-full"></div>
                <div className="absolute bottom-10 -left w-8 h-8 bg-fju-primary rounded-full"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-fju-accent-alt/80 rounded-full"></div>
                <div className="absolute top-1/4 -right-12 w-6 h-6 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              const colors = [
                { bg: 'bg-fju-primary/10', text: 'text-fju-primary' },
                { bg: 'bg-fju-secondary/10', text: 'text-fju-secondary' },
                { bg: 'bg-fju-accent/10', text: 'text-fju-accent' },
                { bg: 'bg-fju-secondary/10', text: 'text-fju-secondary' }
              ]
              const color = colors[index % colors.length]
              
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${color.bg} rounded-full mb-4`}>
                    <IconComponent className={`w-8 h-8 ${color.text}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Highlights</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-wrap">
              Recent significant research achievements in bioinformatics and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const borderColors = ['border-l-fju-primary', 'border-l-fju-secondary', 'border-l-fju-secondary']
              const badgeColors = [
                'bg-fju-primary/10 text-fju-primary',
                'bg-fju-secondary/10 text-fju-secondary', 
                'bg-fju-secondary/10 text-fju-secondary'
              ]
              
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow border-l-4 ${borderColors[index % borderColors.length]}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-slate-900">{highlight.title}</CardTitle>
                      <Badge variant="outline" className={badgeColors[index % badgeColors.length]}>{highlight.year}</Badge>
                    </div>
                    <CardDescription className="text-sm text-slate-500">
                      {highlight.journal}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 text-wrap">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-fju-primary text-fju-primary hover:bg-fju-primary hover:text-white">
              <Link to="/research">
                View All Research <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest News</h2>
            <p className="text-lg text-slate-600">
              Latest updates and academic activities from the lab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-fju-secondary">
              <CardHeader>
                <CardTitle className="text-slate-900">New Publication</CardTitle>
                <CardDescription className="text-fju-secondary font-medium">May 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-wrap">
                  "Light Bladder Net: Non-invasive Bladder Cancer Prediction" 
                  has been published in Anticancer Research, proposing an innovative bladder cancer prediction method.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-fju-accent text-fju-accent hover:bg-fju-accent hover:text-white">
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


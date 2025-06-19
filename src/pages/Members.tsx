import React from 'react'
import { GraduationCap, Calendar, Building, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useSEO } from '../hooks/useSEO'

interface Member {
  id: number
  name: string
  nameEn: string
  thesis: string
  year: number
  currentPosition: string
  researchArea: string[]
}

const Members: React.FC = () => {
  // SEO optimization
  useSEO({
    title: 'Lab Members - Alumni & Research Team',
    description: 'Meet the talented alumni and research team members of Chi-Hua Tung\'s Intelligent Bioinformatics Lab, featuring 9 master\'s graduates with 100% employment rate.',
    keywords: 'lab members, bioinformatics alumni, research team, master graduates, Fu Jen Catholic University, intelligent bioinformatics lab',
    ogTitle: 'Lab Members - Research Team & Alumni',
    ogDescription: 'Discover the accomplished alumni and current members of our bioinformatics research laboratory.'
  })

  const members: Member[] = [
    {
      id: 1,
      name: "楊凱傑",
      nameEn: "Kai-Chieh Yang",
      thesis: "Determining the similarity of discrete fragments in protein structural motif",
      year: 2013,
      currentPosition: "GCE 金像電子股份有限公司",
      researchArea: ["Protein Structure", "Structural Motif"]
    },
    {
      id: 2,
      name: "葉融",
      nameEn: "Jung Yeh",
      thesis: "A Study of Protein Backbone Reconstruction by Applying Structural Alphabet",
      year: 2013,
      currentPosition: "SNSplus Inc. 好玩家股份有限公司",
      researchArea: ["Structural Alphabet", "Protein Reconstruction"]
    },
    {
      id: 3,
      name: "張日旭",
      nameEn: "Jih-Hsu Chang",
      thesis: "Bi-relational network analysis between local structural similarity and disease using random walk with restart",
      year: 2013,
      currentPosition: "經貿聯網科技股份有限公司",
      researchArea: ["Network Analysis", "Disease Prediction"]
    },
    {
      id: 4,
      name: "莊利偉",
      nameEn: "Li-Wei Chuang",
      thesis: "A Study of Residue Contact Number Among the Amino Acid and Structural Alphabet",
      year: 2014,
      currentPosition: "森宏生技股份有限公司",
      researchArea: ["Structural Alphabet", "Residue Contact"]
    },
    {
      id: 5,
      name: "陳冠甫",
      nameEn: "Guan-Fu Chen",
      thesis: "A Study on Improving Prediction of the Human Disease Proteins using Local Structural Similarity Network with Neighborhood Level Enhancement",
      year: 2015,
      currentPosition: "Leader 萊得科技有限公司",
      researchArea: ["Disease Proteins", "Network Analysis"]
    },
    {
      id: 6,
      name: "顏子維",
      nameEn: "Tzu-Wei Yen",
      thesis: "A Study on New Algorithm for Detecting Optimal Composition of Protein Discontinuous Fragments Alignment",
      year: 2016,
      currentPosition: "優越實業有限公司",
      researchArea: ["Protein Alignment", "Algorithm Development"]
    },
    {
      id: 7,
      name: "郭柄良",
      nameEn: "Bing-Liang Kuo",
      thesis: "Using Text Mining to Analyze the Relationship Between Movie Reviews And Taiwan Box Office",
      year: 2016,
      currentPosition: "漢磊科技股份有限公司",
      researchArea: ["Text Mining", "Data Analysis"]
    },
    {
      id: 8,
      name: "葉王祥綜",
      nameEn: "Hsiang-Tsung Yeh Wang",
      thesis: "A study of document classification using text mining technology An Example of Biotechnology News",
      year: 2016,
      currentPosition: "聖堂通訊有限公司",
      researchArea: ["Text Mining", "Document Classification"]
    },
    {
      id: 9,
      name: "郭家豪",
      nameEn: "Chia-Hao Kuo",
      thesis: "A Study on Analysis of Articles in Japan Travel Discussion Board of Bulletin Board System with Text Mining Techniques",
      year: 2018,
      currentPosition: "創為精密材料股份有限公司",
      researchArea: ["Text Mining", "Social Media Analysis"]
    }
  ]

  // Group members by year
  const membersByYear = members.reduce((acc, member) => {
    if (!acc[member.year]) {
      acc[member.year] = []
    }
    acc[member.year].push(member)
    return acc
  }, {} as Record<number, Member[]>)

  const years = Object.keys(membersByYear).map(Number).sort((a, b) => b - a)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-fju-primary to-fju-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Lab Members</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our talented alumni who have contributed to advancing bioinformatics research and are now making impacts in various industries
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-fju-primary/10 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-fju-primary" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{members.length}</div>
              <div className="text-slate-600">Master Graduates</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-fju-secondary/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-fju-secondary" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">6</div>
              <div className="text-slate-600">Years Active</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-fju-accent/10 rounded-full mb-4">
                <Building className="w-8 h-8 text-fju-accent" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">9</div>
              <div className="text-slate-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-fju-secondary/10 rounded-full mb-4">
                <User className="w-8 h-8 text-fju-secondary" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Employment Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Master Students (Alumni)</h2>
          </div>

          <div className="space-y-6">
            {years.map(year => (
              <div key={year}>
                <h3 className="text-2xl font-semibold text-fju-primary mb-6 flex items-center">
                  <hr className="border-t-2 border-fju-primary w-full ml-2" />
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {membersByYear[year].map(member => (
                    <Card key={member.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-fju-secondary">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-lg text-slate-900">
                              {member.nameEn}
                            </CardTitle>
                            <CardDescription className="text-sm text-slate-500 font-medium">
                              {member.name}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="bg-fju-primary/10 text-fju-primary border-fju-primary/20">
                            {member.year}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Thesis Title</h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {member.thesis}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Research Areas</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.researchArea.map((area, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Current Position</h4>
                          <p className="text-sm text-fju-secondary font-medium">
                            {member.currentPosition}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Impact</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our alumni have made significant contributions to bioinformatics, machine learning, and text mining research, 
              and continue to apply their expertise in leading technology companies across Taiwan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-fju-primary mb-3">Protein Structure Analysis</h3>
              <p className="text-slate-600">
                Advanced research in structural alphabet, protein reconstruction, and motif analysis
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-fju-secondary mb-3">Machine Learning Applications</h3>
              <p className="text-slate-600">
                Disease prediction, network analysis, and algorithm development for biological data
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-fju-accent-alt mb-3">Text Mining & Data Science</h3>
              <p className="text-slate-600">
                Document classification, social media analysis, and business intelligence applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Members


import React, { useState } from 'react'
import { ExternalLink, Search, Filter, Calendar, BookOpen, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Publication {
  id: number
  title: string
  authors: string[]
  journal: string
  year: number
  volume?: string
  pages?: string
  doi?: string
  type: 'SCI' | 'EI' | 'Conference'
  category: 'journal' | 'conference' | 'presentation'
  ranking?: string
}

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterYear, setFilterYear] = useState('all')

  // Function to highlight Chi-Hua Tung's name in author list
  const highlightAuthorName = (authors: string[]) => {
    return authors.map((author, index) => {
      const isLastAuthor = index === authors.length - 1
      const separator = isLastAuthor ? '' : ', '
      
      if (author === 'Chi-Hua Tung') {
        return (
          <span key={index}>
            <span className="underline font-medium">{author}</span>
            {separator}
          </span>
        )
      }
      
      return (
        <span key={index}>
          {author}{separator}
        </span>
      )
    })
  }

  const publications: Publication[] = [
    {
      id: 1,
      title: "Light Bladder Net: Non-invasive Bladder Cancer Prediction by Weighted Deep Learning Approaches and Graphical Data Transformation",
      authors: ["Chi-Hua Tung", "Shih-Huan Lin", "Kai-Po Chang", "Ya-Wen Xu", "Min-Ling Chuang", "Yen-Wei Chu"],
      journal: "Anticancer Research",
      year: 2025,
      volume: "45(5)",
      pages: "1953-1964",
      doi: "10.21873/anticanres.17572",
      type: "SCI",
      category: "journal"
    },
    {
      id: 2,
      title: "Deleterious genetic changes in AGTPBP1 result in teratozoospermia with sperm head and flagella defects",
      authors: ["Yu-Hua Lin", "Ya-Yun Wang", "Tsung-Hsuan Lai", "Jih-Lung Teng", "Chi-Wei Lin", "Chih-Chun Ke", "I-Shing Yu", "Hui-Ling Lee", "Chying-Chyuan Chan", "Chi-Hua Tung", "Donald F. Conrad", "Moira K. O'Bryan", "Ying-Hung Lin"],
      journal: "Journal of Cellular and Molecular Medicine",
      year: 2023,
      doi: "10.1111/jcmm.18031",
      type: "SCI",
      category: "journal"
    },
    {
      id: 3,
      title: "Borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities",
      authors: ["Jia-Ru Wu", "Pei-Chieh Lu", "Aye Aye Khine", "Sailent Rizki Sari Simaremare", "Chien-Chi Hung", "Lin-Ming Yiin", "Tsung-Jung Ho", "Chi-Hua Tung", "Hao-Ping Chen"],
      journal: "Biocatalysis and Biotransformation",
      year: 2021,
      doi: "10.1080/10242422.2021.1955865",
      type: "SCI",
      category: "journal"
    },
    {
      id: 4,
      title: "NIgPred: Class-Specific Antibody Prediction for Linear B-Cell Epitopes Based on Heterogeneous Features and Machine-Learning Approaches",
      authors: ["Chi-Hua Tung", "Yi-Sheng Chang", "Kai-Po Chang", "Yen-Wei Chu"],
      journal: "Viruses",
      year: 2021,
      volume: "13(8)",
      pages: "1531",
      doi: "10.3390/v13081531",
      type: "SCI",
      category: "journal"
    },
    {
      id: 5,
      title: "Discovery of a more potent anticancer agent than C4‐benzazole 1,8‐naphthalimide derivatives against murine melanoma",
      authors: ["Chi-Hua Tung", "Yen‐Ta Lu", "Wei-Ting Kao", "Jen-Wei Liu", "Yi-Hsuan Lai", "Shinn-Jong Jiang", "Hao-Ping Chen", "Tzenge-Lien Shih"],
      journal: "Journal of the Chinese Chemical Society",
      year: 2020,
      volume: "67(7)",
      pages: "1254-262",
      doi: "10.1002/jccs.202000019",
      type: "SCI",
      category: "journal",
      ranking: "128/172, CHEMISTRY, MULTIDISCIPLINARY"
    },
    {
      id: 6,
      title: "QUATgo: Protein quaternary structural attributes predicted by two-stage machine learning approaches with heterogeneous feature encoding",
      authors: ["Chi-Hua Tung", "Ching-Hsuan Chien", "Chi-Wei Chen", "Lan-Ying Huang", "Yu-Nan Liu", "Yen-Wei Chu"],
      journal: "PLoS ONE",
      year: 2020,
      volume: "15(4)",
      pages: "e0232087",
      doi: "10.1371/journal.pone.0232087",
      type: "SCI",
      category: "journal",
      ranking: "24/69, MULTIDISCIPLINARY SCIENCES"
    },
    {
      id: 7,
      title: "Efficacy and Safety of Exenatide versus Insulin in Type 2 Diabetes Mellitus: Systematic Review and Meta-Analysis",
      authors: ["Bao-Ju Chen", "Ju Chuko", "Chi-Hua Tung", "Kuang-Yu Hu"],
      journal: "International Journal of Management, Economics and Social Sciences",
      year: 2019,
      volume: "8(3)",
      pages: "253-265",
      type: "EI",
      category: "journal"
    },
    {
      id: 8,
      title: "SUMOgo: Prediction of sumoylation sites on lysines by motif screening models and the effects of various post-translational modifications",
      authors: ["Chi-Chang Chang", "Chi-Hua Tung", "Chi-Wei Chen", "Chin-Hau Tu", "Yen-Wei Chu"],
      journal: "Scientific Reports",
      year: 2018,
      volume: "8",
      pages: "15512",
      type: "SCI",
      category: "journal",
      ranking: "12/64, MULTIDISCIPLINARY SCIENCES"
    },
    {
      id: 9,
      title: "Unveiling disease protein associations by navigating a structural alphabet-encoded protein network",
      authors: ["Chi-Hua Tung", "Jih-Hsu Chang", "Jose C. Nacher"],
      journal: "International Journal of Management, Economics and Social Sciences",
      year: 2017,
      volume: "6(S1)",
      pages: "274-292",
      type: "EI",
      category: "journal"
    },
    {
      id: 10,
      title: "Identifying Post-Translational Modification Crosstalks for Breast Cancer",
      authors: ["Chi-Hua Tung", "Pei-Wei Shueng", "Yen-Wei Chu", "Chi-Wei Chen", "Chian-Ying Chen"],
      journal: "Journal of Computing Science and Engineering",
      year: 2017,
      volume: "11(4)",
      pages: "111-120",
      doi: "10.5626/JCSE.2017.11.4.111",
      type: "EI",
      category: "journal"
    },
    {
      id: 11,
      title: "Functional characterization of Acinetobacter baumannii lacking the RNA chaperone Hfq",
      authors: ["Han-Yueh Kuo", "Hsuan-Hao Chao", "Po-Cheng Liao", "Long Hsu", "Kai-Chih Chang", "Chi-Hua Tung", "Chang-Hua Chen", "Ming-Li Liou"],
      journal: "Frontiers in Microbiology",
      year: 2017,
      volume: "8",
      pages: "2068",
      doi: "10.3389/fmicb.2017.02068",
      type: "SCI",
      category: "journal"
    },
    {
      id: 12,
      title: "Predicting human protein subcellular localization by heterogeneous and comprehensive approaches",
      authors: ["Chi-Hua Tung", "Chi-Wei Chen", "Han-Hao Sun", "Yen-Wei Chu"],
      journal: "PLoS ONE",
      year: 2017,
      volume: "12(6)",
      pages: "e0178832",
      doi: "10.1371/journal.pone.0178832",
      type: "SCI",
      category: "journal",
      ranking: "11/63, MULTIDISCIPLINARY SCIENCES"
    },
    {
      id: 13,
      title: "QuaBingo: A Prediction System for Protein Quaternary Structure Attributes Using Block Composition",
      authors: ["Chi-Hua Tung", "Chi-Wei Chen", "Ren-Chao Guo", "Hui-Fuang Ng", "Yen-Wei Chu"],
      journal: "BioMed Research International",
      year: 2016,
      volume: "2016",
      doi: "10.1155/2016/9480276",
      type: "SCI",
      category: "journal",
      ranking: "82/161, BIOTECHNOLOGY & APPLIED MICROBIOLOGY"
    },
    {
      id: 14,
      title: "fastSCOP: a fast web server for recognizing protein structural domains and SCOP superfamilies",
      authors: ["Chi-Hua Tung", "Jinn-Moon Yang"],
      journal: "Nucleic Acids Research",
      year: 2007,
      volume: "35",
      pages: "W438-W443",
      type: "SCI",
      category: "journal",
      ranking: "5-Year IF: 7.314, Ranking: 30/286"
    },
    {
      id: 15,
      title: "Kappa-alpha plot derived structural alphabet and BLOSUM-like substitution matrix for fast protein structure database search",
      authors: ["Chi-Hua Tung", "Jhang-Wei Huang", "Jinn-Moon Yang"],
      journal: "Genome Biology",
      year: 2007,
      volume: "8",
      pages: "R31.1-R31.16",
      type: "SCI",
      category: "journal",
      ranking: "5-Year IF: 7.354, Ranking: 11/160, 17/156"
    },
    {
      id: 16,
      title: "Protein structure database search and evolutionary classification",
      authors: ["Jinn-Moon Yang", "Chi-Hua Tung"],
      journal: "Nucleic Acids Research",
      year: 2006,
      volume: "34",
      pages: "3646-3659",
      type: "SCI",
      category: "journal",
      ranking: "5-Year IF: 7.314; Ranking: 30/286"
    },
    {
      id: 17,
      title: "A Study of New Algorithm for Detecting Optimal Composition of Protein Discontinuous Fragments Alignment",
      authors: ["Chi-Hua Tung", "Tzu-Wei Yen"],
      journal: "2017 6th IIAI International Congress on Advanced Applied Informatics (IIAI-AAI)",
      year: 2017,
      pages: "864-867",
      type: "Conference",
      category: "conference"
    }
  ]

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filterType === 'all' || pub.type === filterType
    const matchesYear = filterYear === 'all' || pub.year.toString() === filterYear
    
    return matchesSearch && matchesType && matchesYear
  })

  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a)
  const stats = {
    total: publications.length,
    sci: publications.filter(p => p.type === 'SCI').length,
    ei: publications.filter(p => p.type === 'EI').length,
    conference: publications.filter(p => p.type === 'Conference').length
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SCI': return 'bg-slate-100 text-blue-800'
      case 'EI': return 'bg-teal-100 text-green-800'
      case 'Conference': return 'bg-fuchsia-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-wrap">
          A comprehensive collection of research publications in bioinformatics, machine learning, 
          and computational biology spanning over two decades of academic contributions.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-fju-primary" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600">Total Publications</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mx-auto mb-3">
              <Award className="w-6 h-6 text-fju-primary" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stats.sci}</div>
            <div className="text-sm text-slate-600">SCI Papers</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-fju-secondary" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stats.ei}</div>
            <div className="text-sm text-slate-600">EI Papers</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-fuchsia-100 rounded-full mx-auto mb-3">
              <Calendar className="w-6 h-6 text-fuchsia-700" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stats.conference}</div>
            <div className="text-sm text-slate-600">Conference Papers</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="SCI">SCI</SelectItem>
              <SelectItem value="EI">EI</SelectItem>
              <SelectItem value="Conference">Conference</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterYear} onValueChange={setFilterYear}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filteredPublications.map((pub) => (
          <Card key={pub.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight text-wrap mb-2">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 text-wrap">
                    {highlightAuthorName(pub.authors)}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={getTypeColor(pub.type)}>
                    {pub.type}
                  </Badge>
                  <span className="text-sm font-medium text-slate-900">{pub.year}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium text-slate-900">{pub.journal}</span>
                  {pub.volume && <span className="text-slate-600">, {pub.volume}</span>}
                  {pub.pages && <span className="text-slate-600">: {pub.pages}</span>}
                </div>
                
                {pub.ranking && (
                  <div className="text-xs text-slate-500 text-wrap">
                    Ranking: {pub.ranking}
                  </div>
                )}
                
                {pub.doi && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-xs"
                    >
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        DOI: {pub.doi}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-500 text-lg">No publications found matching your criteria.</div>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('')
              setFilterType('all')
              setFilterYear('all')
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Google Scholar Link */}
      <div className="mt-12 text-center">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Complete Citation Metrics
            </h3>
            <p className="text-slate-600 mb-4 text-wrap">
              For the most up-to-date citation counts and H-index, please visit the Google Scholar profile.
            </p>
            <Button asChild>
              <a
                href="https://scholar.google.com.tw/citations?user=cNT1e3wAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Google Scholar Profile
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Publications


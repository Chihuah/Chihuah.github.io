import React, { useState } from 'react'
import { ExternalLink, Search, Calendar, BookOpen, Award, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSEO } from '../hooks/useSEO'
import {
  formatPublicationLine,
  getPublicationsSorted,
  type Publication,
} from '../data/publications'

const Publications: React.FC = () => {
  useSEO({
    title: 'Publications - Research Papers & Academic Contributions',
    description: 'Browse Chi-Hua Tung\'s academic publications including 17 research papers in bioinformatics, machine learning, and medical informatics published in top-tier journals.',
    keywords: 'Chi-Hua Tung publications, bioinformatics papers, machine learning research, medical informatics journals, SCI papers, academic research',
    ogTitle: 'Publications - Academic Research Papers',
    ogDescription: 'Explore comprehensive collection of research publications in computational biology and medical informatics.'
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterYear, setFilterYear] = useState('all')

  const publications = getPublicationsSorted()

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

  const filteredPublications = publications
    .filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some((author) =>
          author.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType = filterType === 'all' || pub.type === filterType
      const matchesYear = filterYear === 'all' || pub.year.toString() === filterYear

      return matchesSearch && matchesType && matchesYear
    })

  const years = [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a)
  const stats = {
    total: publications.length,
    sci: publications.filter((p) => p.type === 'SCI').length,
    ei: publications.filter((p) => p.type === 'EI').length,
    conference: publications.filter((p) => p.type === 'Conference').length,
  }

  const downloadPublications = () => {
    const lines = filteredPublications.map((pub, idx) => formatPublicationLine(pub, idx))
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'publications.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'SCI':
        return 'bg-slate-100 text-blue-800'
      case 'EI':
        return 'bg-teal-100 text-green-800'
      case 'Conference':
        return 'bg-fuchsia-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-wrap">
          A comprehensive collection of research publications in bioinformatics, machine learning,
          and computational biology spanning over two decades of academic contributions.
        </p>
      </div>

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

      <div className="bg-slate-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button onClick={downloadPublications} variant="outline" className="w-full flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Download List
          </Button>
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
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPublications.map((pub: Publication) => (
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
                  {pub.type && (
                    <Badge className={getTypeColor(pub.type)}>{pub.type}</Badge>
                  )}
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
                    <Button variant="outline" size="sm" asChild className="text-xs">
                      <a
                        href={`https://doi.org/${pub.doi.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        DOI: {pub.doi.trim()}
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

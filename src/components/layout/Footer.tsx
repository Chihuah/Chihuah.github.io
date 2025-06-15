import React from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { personalInfo } from '../../data/personal'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-sm">{personalInfo.address}</span>
              </div>
            </div>
          </div>

          {/* 機構資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">機構資訊</h3>
            <div className="space-y-2">
              <p className="text-sm">{personalInfo.institution}</p>
              <p className="text-sm text-gray-400">{personalInfo.institutionEn}</p>
              <a 
                href="https://www.fju.edu.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <span>輔仁大學官網</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">學術資源</h3>
            <div className="space-y-2">
              <a 
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://orcid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <span>ORCID</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://www.researchgate.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name} - 智慧生物資訊實驗室. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


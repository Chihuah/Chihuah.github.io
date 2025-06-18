import React from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { personalInfo } from '../../data/personal'

const Footer: React.FC = () => {
  return (
    <footer className="bg-fju-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-teal-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-teal-400 transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-teal-400" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 text-teal-400 mt-0.5" />
                <span className="text-xs leading-tight">{personalInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Institution Information */}
          <div>
            <h3 className="text-base font-semibold mb-3">Institution</h3>
            <div className="space-y-1">
              <p className="text-sm">{personalInfo.institutionEn}</p>
              <p className="text-sm text-slate-400">{personalInfo.institution}</p>
            </div>
          </div>

          {/* Related Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Related Links</h3>
            <div className="space-y-1">
              <a 
                href="https://www.fju.edu.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors text-sm block"
              >
                <span>天主教輔仁大學 Fu Jen Catholic University</span>
                <ExternalLink className="w-3 h-3" />
              </a><br/>
              <a 
                href="https://miia.fju.edu.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors text-sm block"
              >
                <span>醫資學程 Program of MIIA </span>
                <ExternalLink className="w-3 h-3" />
              </a><br/>
              <a 
                href="https://scholar.google.com.tw/citations?user=cNT1e3wAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors text-sm block"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a><br/>
              <a 
                href="https://orcid.org/0000-0002-7232-312X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors text-sm block"
              >
                <span>ORCID</span>
                <ExternalLink className="w-3 h-3" />
              </a><br/>
              <a 
                href="https://www.researchgate.net/profile/Chi-Hua-Tung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors text-sm block"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-4 pt-4 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {personalInfo.nameEn} - Intelligent Bioinformatics Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


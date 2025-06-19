// SEO Hook for dynamic page titles and meta descriptions
import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
}

export const useSEO = ({ title, description, keywords, ogTitle, ogDescription }: SEOProps) => {
  useEffect(() => {
    // Update page title
    document.title = title

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      } else {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        metaKeywords.setAttribute('content', keywords)
        document.head.appendChild(metaKeywords)
      }
    }

    // Update or create Open Graph title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]')
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle || title)
    } else {
      ogTitleMeta = document.createElement('meta')
      ogTitleMeta.setAttribute('property', 'og:title')
      ogTitleMeta.setAttribute('content', ogTitle || title)
      document.head.appendChild(ogTitleMeta)
    }

    // Update or create Open Graph description
    let ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', ogDescription || description)
    } else {
      ogDescriptionMeta = document.createElement('meta')
      ogDescriptionMeta.setAttribute('property', 'og:description')
      ogDescriptionMeta.setAttribute('content', ogDescription || description)
      document.head.appendChild(ogDescriptionMeta)
    }
  }, [title, description, keywords, ogTitle, ogDescription])
}


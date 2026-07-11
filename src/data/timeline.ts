/**
 * Timeline merge layer
 * Combines project-derived events, publication events, and non-project
 * activities for Activities page and Home Latest News.
 */

import {
  formatPeriod,
  getTimelineType,
  projectsData,
  type Project,
} from './projects'
import {
  publicationsData,
  type Publication,
} from './publications'
import { activitiesData, type Activity } from './activities'

/** Normalize date to YYYY-MM for consistent timeline sorting/display */
function toTimelineDate(date: string): string {
  const parts = date.split('-')
  if (parts.length >= 2) {
    return `${parts[0]}-${parts[1]}`
  }
  return date
}

function projectToActivity(project: Project): Activity {
  const period = formatPeriod(project.startDate, project.endDate)
  const detailsPartsZh: string[] = [`計畫期間：${period}`]
  const detailsPartsEn: string[] = [`Project Period: ${period}`]

  if (project.student) {
    detailsPartsZh.push(`指導學生：${project.student}`)
    detailsPartsEn.push(`Student: ${project.student}`)
  }
  if (project.partner) {
    detailsPartsZh.push(`合作單位：${project.partner}`)
    detailsPartsEn.push(`Partner: ${project.partner}`)
  }

  const dateSource = project.timelineDate ?? project.startDate

  return {
    date: toTimelineDate(dateSource),
    type: getTimelineType(project),
    title: project.title,
    titleEn: project.titleEn,
    description: project.description ?? project.title,
    descriptionEn: project.descriptionEn ?? project.titleEn,
    details: detailsPartsZh.join('，'),
    detailsEn: detailsPartsEn.join(', '),
    funding: project.funding ?? project.support,
  }
}

function publicationToActivity(pub: Publication): Activity {
  const month = pub.month ?? 1
  const date = `${pub.year}-${String(month).padStart(2, '0')}`
  const short = pub.shortName ?? pub.title.split(':')[0].trim()
  const titleZh = pub.shortName ? `${pub.shortName}論文發表` : `${short}論文發表`
  const titleEn = `Publication: ${short}`

  const description =
    pub.summaryZh ??
    `${pub.title} 發表於 ${pub.journal}`
  const descriptionEn =
    pub.summaryEn ??
    `"${pub.title}" published in ${pub.journal}`

  return {
    date,
    type: 'publication',
    title: titleZh,
    titleEn,
    description,
    descriptionEn,
    details: pub.detailsZh,
    detailsEn: pub.detailsEn,
  }
}

/**
 * Merged timeline: projects + publications + non-project activities, newest first.
 */
export function getTimelineItems(): Activity[] {
  const fromProjects = projectsData
    .filter((p) => p.showInTimeline !== false)
    .map(projectToActivity)

  const fromPublications = publicationsData
    .filter((p) => p.showInTimeline === true)
    .map(publicationToActivity)

  return [...fromProjects, ...fromPublications, ...activitiesData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

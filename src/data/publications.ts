/**
 * Shared Publications Data (SSOT)
 * Full bibliography for Publications page; timeline / Home highlights /
 * Research overview citations are derived from this file.
 */

export type PublicationIndexType = 'SCI' | 'EI' | 'Conference'
export type PublicationCategory = 'journal' | 'conference' | 'presentation'

export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  /** Optional month 1–12 for timeline ordering */
  month?: number
  volume?: string
  pages?: string
  doi?: string
  type?: PublicationIndexType
  category: PublicationCategory
  ranking?: string
  /** Short label for Home / timeline, e.g. "Light Bladder Net" */
  shortName?: string
  /** Appear on Activities / Home timeline (default false) */
  showInTimeline?: boolean
  /** Home Research Highlights */
  featured?: boolean
  featuredOrder?: number
  highlightDescription?: string
  /** Research overview reference list (1-based order) */
  researchOverviewOrder?: number
  /** Timeline narrative (optional; template used if omitted) */
  summaryZh?: string
  summaryEn?: string
  detailsZh?: string
  detailsEn?: string
}

export const publicationsData: Publication[] = [
  {
    id: 'pub-2025-light-bladder-net',
    title:
      'Light Bladder Net: Non-invasive Bladder Cancer Prediction by Weighted Deep Learning Approaches and Graphical Data Transformation',
    authors: [
      'Chi-Hua Tung',
      'Shih-Huan Lin',
      'Kai-Po Chang',
      'Ya-Wen Xu',
      'Min-Ling Chuang',
      'Yen-Wei Chu',
    ],
    journal: 'Anticancer Research',
    year: 2025,
    month: 5,
    volume: '45(5)',
    pages: '1953-1964',
    doi: '10.21873/anticanres.17572',
    type: 'SCI',
    category: 'journal',
    shortName: 'Light Bladder Net',
    showInTimeline: true,
    featured: true,
    featuredOrder: 1,
    highlightDescription:
      'Deep learning-based non-invasive bladder cancer prediction system',
    researchOverviewOrder: 8,
    summaryZh: 'Non-invasive Bladder Cancer Prediction論文發表於Anticancer Research期刊',
    summaryEn:
      '"Light Bladder Net: Non-invasive Bladder Cancer Prediction" published in Anticancer Research',
    detailsZh:
      'Developed Light-Bladder-Net, a lightweight deep learning model that combines data transformation and weighted voting techniques to achieve non-invasive bladder cancer prediction based on conventional urine examination, with 83% accuracy and a free online diagnostic tool.',
    detailsEn:
      'Developed Light-Bladder-Net, a lightweight deep learning model that combines data transformation and weighted voting techniques to achieve non-invasive bladder cancer prediction based on conventional urine examination, with 83% accuracy and a free online diagnostic tool.',
  },
  {
    id: 'pub-2023-agtpbp1',
    title:
      'Deleterious genetic changes in AGTPBP1 result in teratozoospermia with sperm head and flagella defects',
    authors: [
      'Yu-Hua Lin',
      'Ya-Yun Wang',
      'Tsung-Hsuan Lai',
      'Jih-Lung Teng',
      'Chi-Wei Lin',
      'Chih-Chun Ke',
      'I-Shing Yu',
      'Hui-Ling Lee',
      'Chying-Chyuan Chan',
      'Chi-Hua Tung',
      'Donald F. Conrad',
      "Moira K. O'Bryan",
      'Ying-Hung Lin',
    ],
    journal: 'Journal of Cellular and Molecular Medicine',
    year: 2023,
    volume: '28:e18031',
    doi: '10.1111/jcmm.18031',
    type: 'SCI',
    category: 'journal',
  },
  {
    id: 'pub-2021-borneol',
    title:
      'Borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities',
    authors: [
      'Jia-Ru Wu',
      'Pei-Chieh Lu',
      'Aye Aye Khine',
      'Sailent Rizki Sari Simaremare',
      'Chien-Chi Hung',
      'Lin-Ming Yiin',
      'Tsung-Jung Ho',
      'Chi-Hua Tung',
      'Hao-Ping Chen',
    ],
    journal: 'Biocatalysis and Biotransformation',
    year: 2021,
    month: 8,
    doi: '10.1080/10242422.2021.1955865',
    type: 'SCI',
    category: 'journal',
    shortName: 'Borneol Dehydrogenase Research',
    showInTimeline: true,
    researchOverviewOrder: 7,
    summaryZh: 'Pseudomonas sp. TCU-HL1的新型quinuclidinone還原酶活性研究',
    summaryEn: 'Novel quinuclidinone reductase activities from Pseudomonas sp. TCU-HL1',
    detailsZh:
      'Discovered that borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities, demonstrating its ability to convert 3-quinuclidinone to (R)-3-(-)-quinuclidinol and elucidating the structural basis for substrate specificity differences between BDH and QR through 3D molecular docking simulations.',
    detailsEn:
      'Discovered that borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities, demonstrating its ability to convert 3-quinuclidinone to (R)-3-(-)-quinuclidinol and elucidating the structural basis for substrate specificity differences between BDH and QR through 3D molecular docking simulations.',
  },
  {
    id: 'pub-2021-nigpred',
    title:
      'NIgPred: Class-Specific Antibody Prediction for Linear B-Cell Epitopes Based on Heterogeneous Features and Machine-Learning Approaches',
    authors: ['Chi-Hua Tung', 'Yi-Sheng Chang', 'Kai-Po Chang', 'Yen-Wei Chu'],
    journal: 'Viruses',
    year: 2021,
    month: 8,
    volume: '13(8)',
    pages: '1531',
    doi: '10.3390/v13081531',
    type: 'SCI',
    category: 'journal',
    shortName: 'NIgPred',
    showInTimeline: true,
    featured: true,
    featuredOrder: 2,
    highlightDescription:
      'Machine learning-based antibody epitope prediction system',
    researchOverviewOrder: 5,
    summaryZh:
      'Class-Specific Antibody Prediction for Linear B-Cell Epitopes論文發表於Viruses期刊',
    summaryEn:
      '"Class-Specific Antibody Prediction for Linear B-Cell Epitopes" published in Viruses journal',
    detailsZh:
      'Developed NIgPred, a novel machine learning tool that integrates heterogeneous features and 60 classifiers with genetic algorithm-based feature selection to predict class-specific antibodies (IgA, IgE, IgG) for linear B-cell epitopes, achieving superior performance over existing tools and 100% accuracy on coronavirus IgG epitope prediction.',
    detailsEn:
      'Developed NIgPred, a novel machine learning tool that integrates heterogeneous features and 60 classifiers with genetic algorithm-based feature selection to predict class-specific antibodies (IgA, IgE, IgG) for linear B-cell epitopes, achieving superior performance over existing tools and 100% accuracy on coronavirus IgG epitope prediction.',
  },
  {
    id: 'pub-2020-melanoma',
    title:
      'Discovery of a more potent anticancer agent than C4‐benzazole 1,8‐naphthalimide derivatives against murine melanoma',
    authors: [
      'Chi-Hua Tung',
      'Yen‐Ta Lu',
      'Wei‐Ting Kao',
      'Jen‐Wei Liu',
      'Yi‐Hsuan Lai',
      'Shinn‐Jong Jiang',
      'Hao‐Ping Chen',
      'Tzenge‐Lien Shih',
    ],
    journal: 'Journal of the Chinese Chemical Society',
    year: 2020,
    volume: '67(7)',
    pages: '1254–1262',
    doi: '10.1002/jccs.202000019',
    type: 'SCI',
    category: 'journal',
    ranking: '128/172, CHEMISTRY, MULTIDISCIPLINARY',
    researchOverviewOrder: 6,
  },
  {
    id: 'pub-2020-quatgo',
    title:
      'QUATgo: Protein quaternary structural attributes predicted by two-stage machine learning approaches with heterogeneous feature encoding',
    authors: [
      'Chi-Hua Tung',
      'Ching-Hsuan Chien',
      'Chi-Wei Chen',
      'Lan-Ying Huang',
      'Yu-Nan Liu',
      'Yen-Wei Chu',
    ],
    journal: 'PLoS ONE',
    year: 2020,
    month: 4,
    volume: '15(4)',
    pages: 'e0232087',
    doi: '10.1371/journal.pone.0232087',
    type: 'SCI',
    category: 'journal',
    ranking: '24/69, MULTIDISCIPLINARY SCIENCES',
    shortName: 'QUATgo',
    showInTimeline: true,
    featured: true,
    featuredOrder: 3,
    highlightDescription:
      'Protein quaternary structure attribute prediction system',
    researchOverviewOrder: 2,
    summaryZh: 'Protein quaternary structural attributes prediction system發表於PLoS ONE',
    summaryEn:
      'Protein quaternary structural attributes prediction system published in PLoS ONE',
    detailsZh:
      'Developed QUATgo, a two-stage machine learning tool that predicts protein quaternary structural attributes for oligomers with more than 12 subunits using heterogeneous feature encoding including dipeptide composition (first time applied to quaternary structure prediction), protein half-life characteristics, and modified functional domain composition, achieving 49.0% cross-validation accuracy and providing a freely accessible web server.',
    detailsEn:
      'Developed QUATgo, a two-stage machine learning tool that predicts protein quaternary structural attributes for oligomers with more than 12 subunits using heterogeneous feature encoding including dipeptide composition (first time applied to quaternary structure prediction), protein half-life characteristics, and modified functional domain composition, achieving 49.0% cross-validation accuracy and providing a freely accessible web server.',
  },
  {
    id: 'pub-2019-exenatide',
    title:
      'Efficacy and Safety of Exenatide versus Insulin in Type 2 Diabetes Mellitus: Systematic Review and Meta-Analysis',
    authors: ['Bao-Ju Chen', 'Ju Chuko', 'Chi-Hua Tung', 'Kuang-Yu Hu'],
    journal: 'International Journal of Management, Economics and Social Sciences',
    year: 2019,
    volume: '8(3)',
    pages: '253–265',
    type: 'EI',
    category: 'journal',
  },
  {
    id: 'pub-2018-sumogo',
    title:
      'SUMOgo: Prediction of sumoylation sites on lysines by motif screening models and the effects of various post-translational modifications',
    authors: [
      'Chi-Chang Chang',
      'Chi-Hua Tung',
      'Chi-Wei Chen',
      'Chin-Hau Tu',
      'Yen-Wei Chu',
    ],
    journal: 'Scientific Reports',
    year: 2018,
    month: 12,
    volume: '8',
    pages: '15512',
    type: 'SCI',
    category: 'journal',
    ranking: '12/64, MULTIDISCIPLINARY SCIENCES',
    shortName: 'SUMOgo',
    showInTimeline: true,
    researchOverviewOrder: 4,
    summaryZh:
      'Prediction of sumoylation sites on lysines by motif screening models發表於Scientific Reports',
    summaryEn: 'Prediction of sumoylation sites on lysines published in Scientific Reports',
    detailsZh:
      "Developed SUMOgo, a Random Forest tool that predicts SUMOylation sites by integrating post-translational modification information as novel features, achieving 0.511 Matthew's correlation coefficient and outperforming existing tools.",
    detailsEn:
      "Developed SUMOgo, a Random Forest tool that predicts SUMOylation sites by integrating post-translational modification information as novel features, achieving 0.511 Matthew's correlation coefficient and outperforming existing tools.",
  },
  {
    id: 'pub-2017-disease-protein-sa',
    title:
      'Unveiling disease protein associations by navigating a structural alphabet-encoded protein network',
    authors: ['Chi-Hua Tung', 'Jih-Hsu Chang', 'Jose C. Nacher'],
    journal: 'International Journal of Management, Economics and Social Sciences',
    year: 2017,
    volume: '6(S1)',
    pages: '274-292',
    type: 'EI',
    category: 'journal',
  },
  {
    id: 'pub-2017-ptm-breast-cancer',
    title: 'Identifying Post-Translational Modification Crosstalks for Breast Cancer',
    authors: [
      'Chi-Hua Tung',
      'Pei-Wei Shueng',
      'Yen-Wei Chu',
      'Chi-Wei Chen',
      'Chian-Ying Chen',
    ],
    journal: 'Journal of Computing Science and Engineering',
    year: 2017,
    volume: '11(4)',
    pages: '111-120',
    doi: '10.5626/JCSE.2017.11.4.111',
    type: 'EI',
    category: 'journal',
  },
  {
    id: 'pub-2017-hfq',
    title:
      'Functional characterization of Acinetobacter baumannii lacking the RNA chaperone Hfq',
    authors: [
      'Han-Yueh Kuo',
      'Hsuan-Hao Chao',
      'Po-Cheng Liao',
      'Long Hsu',
      'Kai-Chih Chang',
      'Chi-Hua Tung',
      'Chang-Hua Chen',
      'Ming-Li Liou',
    ],
    journal: 'Frontiers in Microbiology',
    year: 2017,
    volume: '8',
    pages: '2068',
    doi: '10.3389/fmicb.2017.02068',
    type: 'SCI',
    category: 'journal',
  },
  {
    id: 'pub-2017-realoc',
    title:
      'Predicting human protein subcellular localization by heterogeneous and comprehensive approaches',
    authors: ['Chi-Hua Tung', 'Chi-Wei Chen', 'Han-Hao Sun', 'Yen-Wei Chu'],
    journal: 'PLoS ONE',
    year: 2017,
    month: 6,
    volume: '12(6)',
    pages: 'e0178832',
    doi: '10.1371/journal.pone.0178832',
    type: 'SCI',
    category: 'journal',
    ranking: '11/63, MULTIDISCIPLINARY SCIENCES',
    shortName: 'REALoc',
    showInTimeline: true,
    researchOverviewOrder: 3,
    summaryZh: 'Predicting human protein subcellular localization by heterogeneous approaches',
    summaryEn:
      'Predicting human protein subcellular localization by heterogeneous approaches published in PLoS ONE',
    detailsZh: '與Chi-Wei Chen, Han-Hao Sun, Yen-Wei Chu等人合作，發表於PLoS ONE',
    detailsEn:
      'Collaborated with Chi-Wei Chen, Han-Hao Sun, and Yen-Wei Chu, published in PLoS ONE',
  },
  {
    id: 'pub-2017-iiai-fragments',
    title:
      'A Study of New Algorithm for Detecting Optimal Composition of Protein Discontinuous Fragments Alignment',
    authors: ['Chi-Hua Tung', 'Tzu-Wei Yen'],
    journal: '2017 6th IIAI International Congress on Advanced Applied Informatics (IIAI-AAI)',
    year: 2017,
    pages: '864-867',
    doi: '10.1109/IIAI-AAI.2017.104',
    type: 'Conference',
    category: 'conference',
  },
  {
    id: 'pub-2016-quabingo',
    title:
      'QuaBingo: A Prediction System for Protein Quaternary Structure Attributes Using Block Composition',
    authors: [
      'Chi-Hua Tung',
      'Chi-Wei Chen',
      'Ren-Chao Guo',
      'Hui-Fuang Ng',
      'Yen-Wei Chu',
    ],
    journal: 'BioMed Research International',
    year: 2016,
    month: 12,
    volume: '2016',
    doi: '10.1155/2016/9480276',
    type: 'SCI',
    category: 'journal',
    ranking: '82/161, BIOTECHNOLOGY & APPLIED MICROBIOLOGY',
    shortName: 'QuaBingo',
    showInTimeline: true,
    researchOverviewOrder: 1,
    summaryZh:
      'A Prediction System for Protein Quaternary Structure Attributes Using Block Composition',
    summaryEn:
      'A Prediction System for Protein Quaternary Structure Attributes Using Block Composition published in BioMed Research International',
    detailsZh:
      '與Chi-Wei Chen, Ren-Chao Guo, Hui-Fuang Ng, Yen-Wei Chu等人合作，發表於BioMed Research International',
    detailsEn:
      'Collaborated with Chi-Wei Chen, Ren-Chao Guo, Hui-Fuang Ng, and Yen-Wei Chu, published in BioMed Research International',
  },
  {
    id: 'pub-2016-disease-proteins-lssn',
    title:
      'A Study on Improving Prediction of the Human Disease Proteins using Local Structural Similarity Network with Neighborhood Level Enhancement',
    authors: ['Guan-Fu Chen', 'Chi-Hua Tung'],
    journal: 'Journal of Information Technology and Applications',
    year: 2016,
    volume: '10(1)',
    pages: '9-18',
    category: 'journal',
  },
  {
    id: 'pub-2015-residue-contact',
    title: 'A Study of Residue Contact Number Among the Amino Acid and Structural Alphabet',
    authors: ['Li-Wei Chuang', 'Chi-Hua Tung'],
    journal: 'Journal of Information Technology and Applications',
    year: 2015,
    volume: '9(2)',
    pages: '37-46',
    category: 'journal',
  },
  {
    id: 'pub-2015-backbone-reconstruction',
    title: 'The Study of Protein Backbone Reconstruction by Applying Structural Alphabet',
    authors: ['Jung Yeh', 'Chi-Hua Tung'],
    journal: 'Journal of Information Technology and Applications',
    year: 2015,
    volume: '9(1)',
    pages: '1-7',
    category: 'journal',
  },
  {
    id: 'pub-2014-discrete-fragments',
    title: 'Determining the similarity of discrete fragments in protein structural motif',
    authors: ['Kai-Chieh Yang', 'Chi-Hua Tung'],
    journal: 'Journal of Information Technology and Applications',
    year: 2014,
    volume: '8(3)',
    pages: '56-62',
    category: 'journal',
  },
  {
    id: 'pub-2013-complex-network-sa',
    title:
      'A Complex Network Approach for the Analysis of Protein Units Similarity Using Structural Alphabet',
    authors: ['Chi-Hua Tung', 'Jose C. Nacher'],
    journal: 'International Journal of Bioscience, Biochemistry and Bioinformatics',
    year: 2013,
    volume: '3(5)',
    pages: '433-437',
    category: 'journal',
  },
  {
    id: 'pub-2013-kinase-phosphorylation',
    title:
      'A New Scheme to Predict Kinase-Specific Phosphorylation Sites on Protein Three Dimensional Structures',
    authors: ['Min-Gang Su', 'Kai-Yao Huang', 'Chi-Hua Tung', 'Tzong-Yi Lee'],
    journal: 'International Journal of Bioscience, Biochemistry and Bioinformatics',
    year: 2013,
    volume: '3(5)',
    pages: '473-478',
    category: 'journal',
  },
  {
    id: 'pub-2007-fastscop',
    title:
      'fastSCOP: a fast web server for recognizing protein structural domains and SCOP superfamilies',
    authors: ['Chi-Hua Tung', 'Jinn-Moon Yang'],
    journal: 'Nucleic Acids Research',
    year: 2007,
    volume: '35',
    pages: 'W438-W443',
    type: 'SCI',
    category: 'journal',
    ranking: '5-Year IF: 7.314, Ranking: 30/286',
  },
  {
    id: 'pub-2007-kappa-alpha',
    title:
      'Kappa-alpha plot derived structural alphabet and BLOSUM-like substitution matrix for fast protein structure database search',
    authors: ['Chi-Hua Tung', 'Jhang-Wei Huang', 'Jinn-Moon Yang'],
    journal: 'Genome Biology',
    year: 2007,
    volume: '8',
    pages: 'R31.1-R31.16',
    type: 'SCI',
    category: 'journal',
    ranking: '5-Year IF: 7.354, Ranking: 11/160, 17/156',
  },
  {
    id: 'pub-2006-structure-db-search',
    title: 'Protein structure database search and evolutionary classification',
    authors: ['Jinn-Moon Yang', 'Chi-Hua Tung'],
    journal: 'Nucleic Acids Research',
    year: 2006,
    volume: '34',
    pages: '3646-3659',
    type: 'SCI',
    category: 'journal',
    ranking: '5-Year IF: 7.314; Ranking: 30/286',
  },
]

/** Publications sorted by year descending (stable for list UI) */
export function getPublicationsSorted(): Publication[] {
  return [...publicationsData].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year
    return (b.month ?? 0) - (a.month ?? 0)
  })
}

export function getFeaturedPublications(): Publication[] {
  return publicationsData
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
}

export function getResearchOverviewPublications(): Publication[] {
  return publicationsData
    .filter((p) => p.researchOverviewOrder != null)
    .sort(
      (a, b) => (a.researchOverviewOrder ?? 0) - (b.researchOverviewOrder ?? 0)
    )
}

function formatAuthorsList(authors: string[]): string {
  if (authors.length === 0) return ''
  if (authors.length === 1) return authors[0]
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`
  return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`
}

/** Citation string for Research overview references */
export function formatResearchCitation(pub: Publication): string {
  const authors = formatAuthorsList(pub.authors)
  let venue = pub.journal
  if (pub.volume && pub.pages) {
    venue += `, ${pub.volume}:${pub.pages}`
  } else if (pub.volume) {
    venue += `, Volume ${pub.volume} (${pub.year})`
  } else if (pub.pages) {
    venue += `, ${pub.pages}`
  }

  const typeBits: string[] = []
  if (pub.type) typeBits.push(pub.type)
  if (pub.ranking) typeBits.push(pub.ranking)
  const typePart = typeBits.length ? ` (${typeBits.join(', ')})` : ''

  return `${authors}, "${pub.title}," ${pub.year}, ${venue}.${typePart}`
}

/** Download / plain-text list format (matches previous Publications page) */
export function formatPublicationLine(pub: Publication, index: number): string {
  const authors =
    pub.authors.length > 1
      ? `${pub.authors.slice(0, -1).join(', ')} & ${pub.authors[pub.authors.length - 1]}`
      : pub.authors[0]

  const volPages = pub.volume
    ? pub.pages
      ? `${pub.volume}:${pub.pages}`
      : pub.volume
    : pub.pages || ''

  const typePart = pub.type
    ? `(${pub.type}${pub.ranking ? ', ' + pub.ranking : ''})`
    : pub.ranking
      ? `(${pub.ranking})`
      : ''
  const doiPart = pub.doi ? ` https://doi.org/${pub.doi.trim()}` : ''
  const journalPart = `${pub.journal}${volPages ? `, ${volPages}` : ''}`

  return `${index + 1}. ${authors}, "${pub.title}", ${pub.year}, ${journalPart}, ${typePart}${doiPart}`
}

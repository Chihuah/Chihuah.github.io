/**
 * Shared Activities Data - Bilingual Support
 * This file contains all lab activities with both English and Chinese content.
 * Used by both Home.tsx (English) and Activities.tsx (Bilingual)
 */

export type ActivityType = 'research' | 'teaching' | 'publication' | 'award' | 'collaboration' | 'graduation' | 'speech'

export interface Activity {
    date: string
    type: ActivityType
    title: string
    titleEn: string
    description: string
    descriptionEn: string
    details?: string
    detailsEn?: string
    location?: string
    participants?: string[]
    funding?: string
}

export const activitiesData: Activity[] = [
    // 2025
    {
        date: '2025-08',
        type: 'research',
        title: '從學習評分到角色養成：生成式AI支持下的遊戲化教學實踐',
        titleEn: 'From Learning Assessment to Character Development: Gamified Teaching Practices Powered by Generative AI',
        description: '獲得教育部教學實踐研究計畫，結合遊戲化設計與生成式AI技術，探索創新學習評分機制在人工智慧概論課程中的應用，透過虛擬角色成長系統增強學生學習動機與參與度',
        descriptionEn: 'Awarded Ministry of Education Teaching Practice Research Project, combining gamified design and generative AI to explore innovative learning assessment mechanisms in AI coursework, enhancing student motivation and engagement through virtual character development system',
        details: '計畫期間：2025/08/01 - 2026/07/31',
        detailsEn: 'Project Period: 2025/08/01 - 2026/07/31',
        funding: 'NTD 250,000'
    },
    {
        date: '2025-07',
        type: 'teaching',
        title: '國科會大專生研究計畫啟動',
        titleEn: 'NSTC Undergraduate Research Project',
        description: '輔導學生進行基於生成式 AI 與檢索增強技術之醫療資訊檢索效能研究(以用藥安全為例)的研究專案',
        descriptionEn: 'Supervising student research on medical information retrieval performance using generative AI and retrieval-augmented generation (RAG) technology, with medication safety as a case study',
        details: '計畫期間：2025/07/01 - 2026/02/28，指導學生：翁甄薇',
        detailsEn: 'Project Period: 2025/07/01 - 2026/02/28'
    },
    {
        date: '2025-06',
        type: 'collaboration',
        title: '串接AIoT與健康存摺數據的糖尿病照護AI微服務研發計畫',
        titleEn: 'AI Microservices for Diabetes Care Integrating AIoT and Health Records',
        description: '與安捷康生醫股份有限公司合作開發智慧控糖照護系統，結合智慧手環即時蒐集患者生理數據，透過AI模型提供個人化運動建議、飲食辨識與血糖趨勢預測功能',
        descriptionEn: 'Industry-academia collaboration with AJK Biomedical Inc. to develop an intelligent diabetes care system that integrates smart wearables for real-time physiological data collection, AI-powered personalized exercise recommendations, dietary image recognition, and blood glucose prediction',
        details: '專案期間：2025/06/01 - 2026/05/31',
        detailsEn: 'Project Period: 2025/06/01 - 2026/05/31',
        funding: 'NTD 580,000'
    },
    {
        date: '2025-05',
        type: 'publication',
        title: 'Light Bladder Net論文發表',
        titleEn: 'Publication: Light Bladder Net ',
        description: 'Non-invasive Bladder Cancer Prediction論文發表於Anticancer Research期刊',
        descriptionEn: '"Light Bladder Net: Non-invasive Bladder Cancer Prediction" published in Anticancer Research',
        details: 'Developed Light-Bladder-Net, a lightweight deep learning model that combines data transformation and weighted voting techniques to achieve non-invasive bladder cancer prediction based on conventional urine examination, with 83% accuracy and a free online diagnostic tool.',
        detailsEn: 'Developed Light-Bladder-Net, a lightweight deep learning model that combines data transformation and weighted voting techniques to achieve non-invasive bladder cancer prediction based on conventional urine examination, with 83% accuracy and a free online diagnostic tool.'
    },

    // 2024
    {
        date: '2024-07',
        type: 'teaching',
        title: '國科會大專生研究計畫啟動',
        titleEn: 'NSTC Undergraduate Research Project',
        description: '輔導學生進行利用大型語言模型提升病歷分類準確性與效率的研究專案',
        descriptionEn: 'Supervising student research on improving medical record classification accuracy using large language models',
        details: '計畫期間：2024/07/01 - 2025/02/28，指導學生：黎芷妤',
        detailsEn: 'Project Period: 2024/07/01 - 2025/02/28, Student: Zhi-Yu Li'
    },

    // 2023
    {
        date: '2023-09',
        type: 'teaching',
        title: '新課程開設',
        titleEn: 'New Courses Launched',
        description: 'Java程式設計、資料結構、演算法、醫療決策分析等新課程開始授課',
        descriptionEn: 'Started teaching new courses including Java Programming, Data Structures, Algorithms, and Medical Decision Analysis',
        details: '自2023年開始，新授多門必修課程',
        detailsEn: 'Multiple new required courses introduced since 2023'
    },
    {
        date: '2023-03',
        type: 'teaching',
        title: '開設英語授課課程',
        titleEn: 'English-Taught Course Introduced',
        description: '人工智慧概論 開始授課',
        descriptionEn: 'Introduction to Artificial Intelligence course taught in English',
        details: '自2023年第一學期開始的全英語課程',
        detailsEn: 'Full English course starting from first semester 2023'
    },

    // 2022
    {
        date: '2022-06',
        type: 'graduation',
        title: '螞蟻巢穴圖片辯識之深度學習系統專題完成',
        titleEn: 'Ant Nest Image Recognition Deep Learning Project',
        description: '輔大資工系學生完成螞蟻巢穴深度學習圖片辯識系統專題',
        descriptionEn: 'Fu Jen Computer Science students completed deep learning ant nest image recognition system project',
        participants: ['吳依穎', '葉庭豪', '姚冠宇', '林胤軒']
    },

    // 2021
    {
        date: '2021-08',
        type: 'publication',
        title: 'NIgPred論文發表',
        titleEn: 'Publication:NIgPred ',
        description: 'Class-Specific Antibody Prediction for Linear B-Cell Epitopes論文發表於Viruses期刊',
        descriptionEn: '"Class-Specific Antibody Prediction for Linear B-Cell Epitopes" published in Viruses journal',
        details: 'Developed NIgPred, a novel machine learning tool that integrates heterogeneous features and 60 classifiers with genetic algorithm-based feature selection to predict class-specific antibodies (IgA, IgE, IgG) for linear B-cell epitopes, achieving superior performance over existing tools and 100% accuracy on coronavirus IgG epitope prediction.',
        detailsEn: 'Developed NIgPred, a novel machine learning tool that integrates heterogeneous features and 60 classifiers with genetic algorithm-based feature selection to predict class-specific antibodies (IgA, IgE, IgG) for linear B-cell epitopes, achieving superior performance over existing tools and 100% accuracy on coronavirus IgG epitope prediction.'
    },
    {
        date: '2021-08',
        type: 'publication',
        title: 'Borneol dehydrogenase研究發表',
        titleEn: 'Publication: Borneol Dehydrogenase Research',
        description: 'Pseudomonas sp. TCU-HL1的新型quinuclidinone還原酶活性研究',
        descriptionEn: 'Novel quinuclidinone reductase activities from Pseudomonas sp. TCU-HL1',
        details: 'Discovered that borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities, demonstrating its ability to convert 3-quinuclidinone to (R)-3-(-)-quinuclidinol and elucidating the structural basis for substrate specificity differences between BDH and QR through 3D molecular docking simulations.',
        detailsEn: 'Discovered that borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities, demonstrating its ability to convert 3-quinuclidinone to (R)-3-(-)-quinuclidinol and elucidating the structural basis for substrate specificity differences between BDH and QR through 3D molecular docking simulations.'
    },

    // 2020
    {
        date: '2020-07',
        type: 'collaboration',
        title: '螞蟻生態日記服務平台專案完成',
        titleEn: 'Ant Ecological Diary Platform Project Completed',
        description: '與Empire of ants 螞蟻帝國合作的產學專案順利完成',
        descriptionEn: 'Industry-academia collaboration project with Empire of Ants successfully completed',
        details: '專案期間：2019/10/01 - 2020/07/31',
        detailsEn: 'Project Period: 2019/10/01 - 2020/07/31',
        funding: 'NTD 500,000'
    },
    {
        date: '2020-04',
        type: 'publication',
        title: 'QUATgo論文發表',
        titleEn: 'Publication: QUATgo',
        description: 'Protein quaternary structural attributes prediction system發表於PLoS ONE',
        descriptionEn: 'Protein quaternary structural attributes prediction system published in PLoS ONE',
        details: 'Developed QUATgo, a two-stage machine learning tool that predicts protein quaternary structural attributes for oligomers with more than 12 subunits using heterogeneous feature encoding including dipeptide composition (first time applied to quaternary structure prediction), protein half-life characteristics, and modified functional domain composition, achieving 49.0% cross-validation accuracy and providing a freely accessible web server.',
        detailsEn: 'Developed QUATgo, a two-stage machine learning tool that predicts protein quaternary structural attributes for oligomers with more than 12 subunits using heterogeneous feature encoding including dipeptide composition (first time applied to quaternary structure prediction), protein half-life characteristics, and modified functional domain composition, achieving 49.0% cross-validation accuracy and providing a freely accessible web server.'
    },
    {
        date: '2020-06',
        type: 'graduation',
        title: '肺部聽診與宿舍E化系統專題',
        titleEn: 'Lung Auscultation and Dormitory E-Service Projects',
        description: '中華大學生物資訊系學生，林育均等人完成肺部疾病判斷專題，吳佩宜等人完成宿舍借取用品E化服務系統',
        descriptionEn: 'Chung Hua University Bioinformatics students completed lung disease diagnosis and dormitory e-service system projects',
        participants: ['林育均', '潘昱伶', '趙翊筌', '吳佩宜', '李定奕', '溫國勛']
    },

    // 2019
    {
        date: '2019-06',
        type: 'graduation',
        title: '皮膚病變醫學影像辨識專題',
        titleEn: 'Skin Lesion Medical Image Recognition Project',
        description: '中華大學生物資訊系學生完成皮膚病變醫學影像辨識專題',
        descriptionEn: 'Chung Hua University Bioinformatics students completed skin lesion medical image recognition project',
        participants: ['呂妮珈', '陳沛柔', '簡心潔', '王莉卉']
    },

    // 2018
    {
        date: '2018-12',
        type: 'publication',
        title: 'SUMOgo論文發表',
        titleEn: 'Publication: SUMOgo',
        description: 'Prediction of sumoylation sites on lysines by motif screening models發表於Scientific Reports',
        descriptionEn: 'Prediction of sumoylation sites on lysines published in Scientific Reports',
        details: 'Developed SUMOgo, a Random Forest tool that predicts SUMOylation sites by integrating post-translational modification information as novel features, achieving 0.511 Matthew\'s correlation coefficient and outperforming existing tools.',
        detailsEn: 'Developed SUMOgo, a Random Forest tool that predicts SUMOylation sites by integrating post-translational modification information as novel features, achieving 0.511 Matthew\'s correlation coefficient and outperforming existing tools.'
    },
    {
        date: '2018-06',
        type: 'graduation',
        title: '碩士班學生郭家豪畢業',
        titleEn: 'Master Student Chia-Hao Kuo Graduation',
        description: '完成碩士論文',
        descriptionEn: 'Completed master thesis research',
        participants: ['郭家豪']
    },
    {
        date: '2018-06',
        type: 'graduation',
        title: 'AI影像辨識專題成果',
        titleEn: 'AI Image Recognition Projects',
        description: '李蕙汝等完成英漢翻譯專題，陳紘睿等完成台灣常見螞蟻深度學習影像辨識',
        descriptionEn: 'Students completed English-Chinese translation and Taiwan ant species deep learning image recognition projects',
        participants: ['李蕙汝', '高慈敏', '陳紘睿', '洪愷俐', '吳佩琦']
    },
    {
        date: '2018-05',
        type: 'speech',
        title: '逢甲大學學術演講',
        titleEn: 'Academic Talk at Feng Chia University',
        description: 'Analysis of Human Pathogenic Proteins using Local Structural Similarity Network',
        descriptionEn: 'Analysis of Human Pathogenic Proteins using Local Structural Similarity Network',
        location: 'Department of Information Engineering and Computer Science, Feng Chia University'
    },

    // 2017
    {
        date: '2017-06',
        type: 'publication',
        title: 'REALoc論文發表',
        titleEn: 'Publication: REALoc',
        description: 'Predicting human protein subcellular localization by heterogeneous approaches',
        descriptionEn: 'Predicting human protein subcellular localization by heterogeneous approaches published in PLoS ONE',
        details: '與Chi-Wei Chen, Han-Hao Sun, Yen-Wei Chu等人合作，發表於PLoS ONE',
        detailsEn: 'Collaborated with Chi-Wei Chen, Han-Hao Sun, and Yen-Wei Chu, published in PLoS ONE'
    },
    {
        date: '2017-06',
        type: 'graduation',
        title: '智慧系統與教具開發專題',
        titleEn: 'Smart Systems and Educational Tools Projects',
        description: '多組學生完成智慧自走車、機器人教具、桌遊設計等創新專題',
        descriptionEn: 'Multiple student teams completed innovative projects including smart vehicles, robot teaching aids, and board game designs',
        participants: ['陳柏宇', '王宗豪', '鄭宜彥', '張正霖', '洪芸璇', '蔡佩衿', '陳珈慧']
    },
    {
        date: '2017-07',
        type: 'research',
        title: '科技部病理蛋白預測研究計畫結案',
        titleEn: 'MOST Pathogenic Protein Prediction Project Completed',
        description: 'Developing disease-USA network with weighted RWR score for protein pathogenic prediction順利完成',
        descriptionEn: 'Successfully completed "Developing disease-USA network with weighted RWR score for protein pathogenic prediction"',
        details: '計畫期間：2016/08/01 - 2017/07/31',
        detailsEn: 'Project Period: 2016/08/01 - 2017/07/31',
        funding: 'NTD 423,000'
    },

    // 2016
    {
        date: '2016-12',
        type: 'publication',
        title: 'QuaBingo論文發表',
        titleEn: 'Publication: QuaBingo',
        description: 'A Prediction System for Protein Quaternary Structure Attributes Using Block Composition',
        descriptionEn: 'A Prediction System for Protein Quaternary Structure Attributes Using Block Composition published in BioMed Research International',
        details: '與Chi-Wei Chen, Ren-Chao Guo, Hui-Fuang Ng, Yen-Wei Chu等人合作，發表於BioMed Research International',
        detailsEn: 'Collaborated with Chi-Wei Chen, Ren-Chao Guo, Hui-Fuang Ng, and Yen-Wei Chu, published in BioMed Research International'
    },
    {
        date: '2016-06',
        type: 'graduation',
        title: '顏子維、郭柄良、葉王祥綜碩士畢業',
        titleEn: 'Master Students Graduation',
        description: '三位碩士生分別完成蛋白質片段比對、自然語言處理、文字探勘與文件分類等研究',
        descriptionEn: 'Three master students completed research in protein fragment alignment, NLP, and text mining',
        participants: ['顏子維', '郭柄良', '葉王祥綜']
    },

    // 2015
    {
        date: '2015-06',
        type: 'graduation',
        title: '陳冠甫碩士畢業',
        titleEn: 'Master Student Guan-Fu Chen Graduation',
        description: '完成「Improving Prediction of Human Disease Proteins using Local Structural Similarity Network」碩士論文研究',
        descriptionEn: 'Completed master thesis "Improving Prediction of Human Disease Proteins using Local Structural Similarity Network"',
        participants: ['陳冠甫']
    },

    // 2014
    {
        date: '2014-06',
        type: 'graduation',
        title: '莊利偉碩士畢業',
        titleEn: 'Master Student Li-Wei Chuang Graduation',
        description: '完成「A Study of Residue Contact Number Among the Amino Acid and Structural Alphabet」碩士論文研究',
        descriptionEn: 'Completed master thesis "A Study of Residue Contact Number Among the Amino Acid and Structural Alphabet"',
        participants: ['莊利偉']
    },

    // 2013
    {
        date: '2013-06',
        type: 'graduation',
        title: '首屆三位碩士生畢業',
        titleEn: 'First Three Master Students Graduation',
        description: '楊凱傑、葉融、張日旭三位碩士生順利畢業，開啟實驗室人才培育里程碑',
        descriptionEn: 'Kai-Chieh Yang, Jung Yeh, and Jih-Hsu Chang successfully graduated, marking the beginning of lab talent development',
        participants: ['楊凱傑', '葉融', '張日旭']
    },
    {
        date: '2013-06',
        type: 'speech',
        title: '慈濟大學學術演講',
        titleEn: 'Academic Talk at Tzu Chi University',
        description: 'A Complex Network Approach for the Analysis of Protein Units Similarity Using Structural Alphabet',
        descriptionEn: 'A Complex Network Approach for the Analysis of Protein Units Similarity Using Structural Alphabet',
        location: 'Department of Medical Informatics, Tzu Chi University'
    },
    {
        date: '2013-07',
        type: 'research',
        title: '科技部計畫結構導向距離模體研究結案',
        titleEn: 'MOST Structure-Oriented Distance Motif Project Completed',
        description: 'Structure-Oriented Distance Motif for Protein Functions Prediction專案完成',
        descriptionEn: 'Successfully completed "Structure-Oriented Distance Motif for Protein Functions Prediction" project',
        details: '專案期間：2012/08/01 - 2013/07/31',
        detailsEn: 'Project Period: 2012/08/01 - 2013/07/31',
        funding: 'NTD 528,000'
    }
]

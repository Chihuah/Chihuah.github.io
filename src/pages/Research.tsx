import React from 'react'
import { ExternalLink, Microscope, Brain, Database, Dna, FlaskConical, Users, Target, Lightbulb, Award, Calendar, DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Research: React.FC = () => {
  const futureDirections = [
    {
      title: "AI-driven \"Structural Alphabet 2.0\" system",
      description: "Our future research will focus on developing an AI-driven \"Structural Alphabet 2.0\" system, enabling ultra-fast structural indexing and functional annotation for entire proteomes. Although the original Structural Alphabet (SA) effectively compressed protein 3D structures and supported rapid structural comparisons (e.g., 3D-BLAST), the recent surge of near-atomic-level predictions from AlphaFold2 and ESMFold demands more scalable solutions. To address this, we aim to leverage self-supervised deep learning approaches, including contrastive learning and variational autoencoders, to adaptively refine the SA framework, generating a new embedding (\"SA-Embedding\") that maps proteins into low-dimensional vector spaces. Coupled with advanced ANN/LSH indexing, this method will achieve sub-second nearest-neighbor searching across hundreds of millions of protein models. Furthermore, we plan to develop \"u3D-BLAST,\" integrating enhanced SASM algorithms and deep-learning-based scoring functions for statistically robust evaluation and automatic functional annotation (Gene Ontology, EC numbers). Ultimately, this innovative platform will deliver large-scale structural annotations akin to UniProt's functional annotations, significantly benefiting structural genomics, protein engineering, and remote homology detection across databases such as CATH and Pfam-Clan."
    },
    {
      title: "Application of advanced deep learning methods",
      description: "We will explore more sophisticated deep learning architectures, such as Graph Neural Networks (GNN) and Attention Mechanisms, for protein structure and function prediction. These advanced deep learning methods can more effectively capture complex patterns within protein sequences and structures, thereby enhancing prediction accuracy."
    },
    {
      title: "Structural Immunoinformatics Platform development",
      description: "We aim to develop a \"Structural Immunoinformatics Platform,\" integrating Structural Alphabet (SA) methods to rapidly map antibody interaction spaces and enable AI-driven antibody design. This platform will establish a \"CDR-SA Signature\" database for ultra-fast structural matching of millions of antibody sequences, complemented by an \"Epitope-Hotspot Mapping\" system to predict antigen interaction hotspots. Furthermore, an AI-guided workflow will be created for generative design of antibodies with improved affinity and manufacturability, significantly accelerating vaccine and therapeutic antibody development."
    },
    {
      title: "Integration of multi-omics data",
      description: "By integrating proteomics, genomics, and metabolomics data, we aim to develop more comprehensive predictive models to enhance prediction accuracy. Such integration not only provides a more holistic biological perspective but also captures interactions across different omics levels, thus facilitating deeper insights into biological mechanisms."
    },
    {
      title: "Clinical application of bioinformatics tools",
      description: "We will apply the developed bioinformatics tools to clinical research, particularly in disease diagnosis and personalized medicine. These clinical applications will not only validate the practicality of the tools but also provide innovative methods and resources for clinical practice."
    },
    {
      title: "Development of user-friendly bioinformatics tools",
      description: "We will package our predictive systems and computational tools into more user-friendly interfaces, making them accessible to non-specialists. Such user-friendly tools will broaden their utilization and facilitate the application of bioinformatics methodologies in biological and medical research."
    }
  ]

  const mostProjects = [
    {
      title: "Developing disease-USA network with weighted RWR score for protein pathogenic prediction",
      period: "2016/08/01 - 2017/07/31",
      funding: "NTD 423,000"
    },
    {
      title: "Structure-Oriented Distance Motif for Protein Functions Prediction and Annotation",
      period: "2012/08/01 - 2013/07/31",
      funding: "NTD 528,000"
    },
    {
      title: "Networks of Protein Structural Units in Pharmaceutical Applications",
      period: "2012/01/01 - 2012/07/31",
      funding: "NTD 500,000"
    }
  ]

  const industryProject = {
    title: "整合影像辨識分析螞蟻成長過程-螞蟻生態日記服務平台 (Integrated Image Recognition and Analysis of Ant Growth: An Ant Ecological Diary Service Platform)",
    period: "2019/10/01 - 2020/07/31",
    funding: "NTD 500,000",
    partner: "Empire of ants 螞蟻帝國"
  }

  const nstcProject = {
    title: "利用大型語言模型提升病歷分類準確性與效率的研究 -- 訓練醫療大型語言模型應用至醫療檢閱平台",
    period: "2024/07/01 - 2025/02/28",
    student: "黎芷妤"
  }

  const references = [
    "Chi-Hua Tung, Chi-Wei Chen, Ren-Chao Guo, Hui-Fuang Ng, and Yen-Wei Chu, \"QuaBingo: A Prediction System for Protein Quaternary Structure Attributes Using Block Composition,\" 2016, BioMed Research International, Volume 2016 (2016). (SCI, 82/161, BIOTECHNOLOGY & APPLIED MICROBIOLOGY)",
    "Chi-Hua Tung, Ching-Hsuan Chien, Chi-Wei Chen, Lan-Ying Huang, Yu-Nan Liu, Yen-Wei Chu, \"QUATgo: Protein quaternary structural attributes predicted by two-stage machine learning approaches with heterogeneous feature encoding,\" 2020, PLoS ONE, 15(4): e0232087. (SCI, 24/69, MULTIDISCIPLINARY SCIENCES)",
    "Chi-Hua Tung, Chi-Wei Chen, Han-Hao Sun, and Yen-Wei Chu, \"Predicting human protein subcellular localization by heterogeneous and comprehensive approaches,\" 2017, PLoS ONE, 12(6): e0178832. (SCI, 11/63, MULTIDISCIPLINARY SCIENCES)",
    "Chi-Chang Chang, Chi-Hua Tung, Chi-Wei Chen, Chin-Hau Tu, Yen-Wei Chu, \"SUMOgo: Prediction of sumoylation sites on lysines by motif screening models and the effects of various post-translational modifications,\" 2018, SCIENTIFIC REPORTS, 8(2018), 15512. (SCI, 12/64, MULTIDISCIPLINARY SCIENCES)",
    "Chi-Hua Tung, Yi-Sheng Chang, Kai-Po Chang, Yen-Wei Chu, \"NIgPred: Class-Specific Antibody Prediction for Linear B-Cell Epitopes Based on Heterogeneous Features and Machine-Learning Approaches,\" 2021 Aug, Viruses, 13(8):1531. (SCI)",
    "Chi-Hua Tung, Yen‐Ta Lu, Wei‐Ting Kao, Jen‐Wei Liu, Yi‐Hsuan Lai, Shinn‐Jong Jiang, Hao‐Ping Chen, Tzenge‐Lien Shih, \"Discovery of a more potent anticancer agent than C4‐benzazole 1,8‐naphthalimide derivatives against murine melanoma,\" 2020, JOURNAL OF THE CHINESE CHEMICAL SOCIETY, 67(7): 1254–1262. (SCI, 128/172, CHEMISTRY, MULTIDISCIPLINARY)",
    "Jia-Ru Wu, Pei-Chieh Lu, Aye Aye Khine, Sailent Rizki Sari Simaremare, Chien-Chi Hung, Lin-Ming Yiin, Tsung-Jung Ho, Chi-Hua Tung & Hao-Ping Chen, \"Borneol dehydrogenase from Pseudomonas sp. TCU-HL1 possesses novel quinuclidinone reductase activities,\" 2021 Aug, Biocatalysis and Biotransformation, (SCI)",
    "Chi-Hua Tung, Shih-Huan Lin, Kai-Po Chang, Ya-Wen Xu, Min-Ling Chuang, Yen-Wei Chu, \"Light Bladder Net: Non-invasive Bladder Cancer Prediction by Weighted Deep Learning Approaches and Graphical Data Transformation,\" 2025 May, Anticancer Research, 45(5):1953-1964, (SCI)"
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Research</h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto text-wrap">
          Advancing bioinformatics through innovative computational methodologies and predictive systems, 
          providing robust tools for protein function research and novel perspectives for disease investigation.
        </p>
      </div>

      {/* Academic Research Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Academic Research and Teaching Results in Recent Years</h2>
        
        <div className="bg-slate-50 rounded-lg p-8 mb-8">
          <p className="text-fju-primary mb-6 text-wrap leading-relaxed">
            In recent years, our academic research has achieved significant advancements across multiple domains, including protein structure 
            prediction, post-translational modification prediction, antibody epitope prediction, enzymology research, and medical informatics 
            applications. Through the development of innovative computational methodologies and predictive systems, we have provided robust 
            computational tools for protein function research while offering novel perspectives for the investigation of related diseases.
          </p>
          
          <p className="text-fju-primary mb-6 text-wrap leading-relaxed">
            Our research has not only propelled the advancement of bioinformatics but also provided substantial support for biomedical research. 
            In the realm of protein structure prediction, we have developed QuaBingo [1] and QUATgo [2], both systems significantly enhancing 
            the accuracy of protein quaternary structure prediction. Extending these computational innovations to protein subcellular localization, 
            our REALoc system simultaneously addresses singleplex and multiplex protein localization, presenting a comprehensive predictive 
            approach [3]. Building upon similar methodological strategies, our SUMOgo system advances protein post-translational modification 
            prediction by incorporating the interplay of various PTMs, thereby improving the prediction of SUMOylation sites [4]. In antibody 
            research, we further refined our computational techniques through NIgPred, a system integrating diverse heterogeneous features with 
            advanced machine learning methods to outperform existing epitope prediction tools [5]. Beyond protein-centric predictions, our 
            enzymology studies utilized genetic algorithm-based protein-ligand docking software to discover potential anticancer agents against 
            melanoma [6], and identified novel enzymatic activities in BDH, significantly broadening its biotechnological applications [7]. 
            Finally, translating our computational expertise into clinical practice, we developed the LBN system, providing a rapid, 
            cost-effective, and non-invasive diagnostic solution for bladder cancer [8].
          </p>
          
          <p className="text-fju-primary mb-8 text-wrap leading-relaxed">
            In addition to research, we actively engage in industry-academia collaboration, currently developing a convolutional neural 
            network-based application for image identification to assess the population of ants within their nests. Moving forward, we aim 
            to extend these preliminary outcomes into broader industrial applications in bioinformatics, medical informatics, and AI-driven 
            deep learning technologies. Additionally, we mentor undergraduate students in conducting artificial intelligence and deep learning 
            projects. Following a year of dedicated training and hands-on experience, our students successfully develop deep learning models 
            with strong predictive performance, applying them effectively in diverse AI application scenarios. Examples of student-driven 
            projects include medical applications such as respiratory sound analysis for distinguishing lung diseases and image recognition 
            for skin melanoma, as well as ecological applications including identification of fall armyworms, lepidopteran larvae, and 
            common ant species in Taiwan.
          </p>

          {/* References */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">References</h4>
            <div className="space-y-2">
              {references.map((ref, index) => (
                <p key={index} className="text-xs text-slate-600 text-wrap leading-relaxed">
                  [{index + 1}] {ref}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Research Directions */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Future Research Directions</h2>
        <p className="text-lg text-slate-600 mb-8 text-wrap">
          Building upon our existing research achievements, we plan to deepen our investigations in the following areas:
        </p>
        
        <div className="space-y-6">
          {futureDirections.map((direction, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-wrap flex items-start gap-3">
                  <span className="bg-slate-100 text-fju-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  {direction.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fju-primary text-wrap leading-relaxed">{direction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MOST Projects */}
      <section className="mb-16 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The National Science and Technology Council (NSTC) Projects</h2>
        
        <div className="space-y-6">
          {mostProjects.map((project, index) => (
            <Card key={index} className="border-l-4 border-fju-secondary">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-wrap">{project.title}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Funding: {project.funding}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry-Academia Cooperation */}
      <section className="mb-16 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Industry-academia Cooperation Project</h2>
        
        <Card className="border-l-4 border-fju-accent">
          <CardContent className="p-6">
            <h4 className="font-semibold text-slate-900 mb-3 text-wrap">{industryProject.title}</h4>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{industryProject.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>Funding: {industryProject.funding}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="w-4 h-4" />
              <span>Cooperate with {industryProject.partner}</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* NSTC Project */}
      <section className="mb-16 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">指導國科會大專生研究計畫</h2>
        
        <Card className="border-l-4 border-amber-500">
          <CardContent className="p-6">
            <h4 className="font-semibold text-slate-900 mb-3 text-wrap">{nstcProject.title}</h4>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{nstcProject.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>學生：{nstcProject.student}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Protein Structural Units Networks */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Protein Structural Units Networks</h2>
        
        <div className="bg-slate-50 rounded-lg p-8">
          <p className="text-fju-primary mb-6 text-wrap leading-relaxed">
            Using SA, we define new local structural fragments called units of structural alphabet (USAs) that represent unique features of protein 
            structures. Each USA is composed of two secondary protein structures and one loop located between these two secondary structures. USAs can 
            maintain not only the flexibility of variable loops but also the stability of secondary structures. We conduct a similarity search and investigate the 
            network formed by all-against-all USA sequence comparisons, where USAs represent nodes and links represent homology relationships.
          </p>
          
          <p className="text-fju-primary text-wrap leading-relaxed">
            Our findings show a highly uneven degree distribution characterized by a few and highly connected USAs (hubs) coexisting with many nodes 
            having only a few links. Networks with such a power-law degree distribution are scale free. These findings not only suggest the existence of 
            organizing principles for local protein structures but also allow us to identify key fragments that are potentially useful for new drug development 
            and design. Of particular interest is the identification of USAs in the set of known drug protein targets.
          </p>
        </div>
      </section>

      {/* 3D-BLAST */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">3D-BLAST Protein Structure Search</h2>
        
        <div className="bg-slate-50 rounded-lg p-8">
          <p className="text-fju-primary text-wrap leading-relaxed">
            We developed the kappa-alpha (κ, α) plot derived structural alphabet and a novel BLOSUM-like substitution matrix, called structural alphabet 
            substitution matrix, which searches through the structural alphabet database. This structural alphabet (SA) was used in developing the fast 
            structure database search method called 3D-BLAST, which is as fast as BLAST and provides the statistical significance (E-value) of an alignment, 
            indicating the reliability of a hit protein structure. Moreover, we developed an automated server called fastSCOP for integrating a fast structure 
            database search tool (3D-BLAST) and a detailed structural comparison tool, as well as for recognizing the SCOP domains and SCOP superfamilies 
            of query structures.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Research


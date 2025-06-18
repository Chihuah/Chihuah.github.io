import React from 'react'
import { BookOpen, GraduationCap, Presentation, Calendar, Users, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Teaching: React.FC = () => {
  const currentCourses = [
    "Java Programming I&II (Since Fall 2023 & Spring 2024)",
    "Data Structures (Since Fall 2023)",
    "Medical Decision Analysis (Since Fall 2023)",
    "Algorithms (Since Spring 2023)",
    "Introduction of Artificial Intelligence [Course in English] (Since Spring 2023)"
  ]

  const courseCategories = [
    {
      category: "Programming & Software Development",
      courses: [
        "Practical Database Application",
        "C Language Programming",
        "Database System",
        "Dynamic Web Programming: PHP",
        "Full Stack Web Design"
      ]
    },
    {
      category: "Bioinformatics & Computational Biology",
      courses: [
        "Bioinformatics",
        "Practical Bioinformatics",
        "Structural Bioinformatics",
        "Bioinformatic Databases"
      ]
    },
    {
      category: "Life Sciences & Biology",
      courses: [
        "Biochemistry",
        "Molecular Biology",
        "Microbiology and Immunology"
      ]
    },
    {
      category: "Data Science & AI",
      courses: [
        "Biomedical Signal Analysis",
        "Artificial Intelligence",
        "Medical Data Analysis and Machine Learning"
      ]
    },
    {
      category: "Innovation & General Education",
      courses: [
        "Creativity Engineering / Creation and Invention",
        "Scientific Reading in Biotechnology",
        "General Education Courses: Introduction to Life Sciences",
        "Introduction to the IoT (at Longyan University)"
      ]
    }
  ]

  const graduationProjects = [
  { students: "吳依穎、葉庭豪、姚冠宇、林胤軒", title: "螞蟻巢穴深度學習圖片辯識系統之開發", year: "2022" },
  { students: "林育均、潘昱伶、趙翊筌", title: "肺部聽診資料庫分析 肺部疾病判斷", year: "2020" },
  { students: "吳佩宜、李定奕、溫國勛", title: "宿舍借取用品E化服務系統", year: "2020" },
  { students: "呂妮珈、陳沛柔、簡心潔、王莉卉", title: "皮膚病變醫學影像辨識", year: "2019" },
  { students: "李蕙汝、高慈敏", title: "以R語言實作外國人姓名英漢翻譯", year: "2018" },
  { students: "陳紘睿、洪愷俐、吳佩琦", title: "台灣常見螞蟻之深度學習影像辨識", year: "2018" },
  { students: "陳柏宇、王宗豪、鄭宜彥、張正霖", title: "智慧自走車灌溉系統開發", year: "2017" },
  { students: "洪芸璇、蔡佩衿、陳珈慧", title: "機器人輔助程式設計教具及教案之開發", year: "2017" },
  { students: "周俊良、吳晏嶔、廖仁瑋、林奕安", title: "生物主題之桌遊設計與開發", year: "2017" },
  { students: "吳承翰、陳柏憲", title: "「呼朋引伴」餐飲業行銷APP開發", year: "2017" },
  { students: "周佳瑩、游宛樺、沈怡安", title: "學生學習指標雷達圖暨選課職涯輔助系統開發-以中華大學生資系為例", year: "2016" },
  { students: "許舒雯、李昀霈、傅軍雅", title: "現代國語流行歌詞音韻資料庫之建置", year: "2015" },
  { students: "蔡明勳、范元駿、陳維洺、蔡育庭", title: "手語辨識與翻譯系統之研究", year: "2015" },
  { students: "王閔麒、陳毅", title: "以局部結構相似度網路之重啟隨機遊走研究蛋白質磷酸化", year: "2014" },
  { students: "馮雲揚、黃冠霖、許藝懷、彭麗樺", title: "數位學習行動平台建置", year: "2014" },
  { students: "簡欣怡、林雅琪、孫桂聆、蔡佩穎", title: "綠膿桿菌結構基因體資料庫之建置研究", year: "2014" },
  { students: "呂姿穎、林佳穎、柯鈺彤、李懿容", title: "利用染色質免疫沉澱定序資料研究TR4核受體結合位", year: "2013" },
  { students: "江偉群、魏嘉宏、石錦賢", title: "利用結構字元集之多重蛋白結構比對工具", year: "2013" },
  { students: "魏士丰、陳昊宗、葉王祥綜", title: "利用結構字元集預測蛋白質甲基化修飾位", year: "2012" },
  { students: "紀郁祥、曾景宏、陳敬凱", title: "探討TR4核受體結合位資訊與致病基因之關聯", year: "2012" },
  { students: "張君穗、吳佳榛", title: "以蛋白質局部結構相似度網路研究結構與功能之相關性", year: "2011" }
]

  const speeches = [
    {
      title: "Analysis of Human Pathogenic Proteins using Local Structural Similarity Network",
      venue: "Department of Information Engineering and Computer Science, Feng Chia University",
      date: "2018/05/15"
    },
    {
      title: "A Complex Network Approach for the Analysis of Protein Units Similarity Using Structural Alphabet",
      venue: "Department of Medical Informatics, Tzu Chi University",
      date: "2013/06/13"
    },
    {
      title: "Bioinformatics application in vaccine research",
      venue: "Institute of Animal Vaccine Technology, National Pingtung University of Science and Technology",
      date: "2012/09/26"
    },
    {
      title: "Kappa-alpha plot derived structural alphabet and BLOSUM-like substitution matrix for rapid search of protein structure database",
      venue: "The Department of Computer Science and Engineering, Yuan Ze University",
      date: "2011/12/02"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Lectures</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-wrap">
          Comprehensive teaching experience spanning programming, bioinformatics, data science, 
          and artificial intelligence with a focus on practical applications and student mentorship.
        </p>
      </div>
    
      {/* Current Courses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Courses (Since 2023)</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentCourses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-fju-primary">
              <CardContent className="p-2">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 text-fju-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-wrap text-sm leading-tight">{course}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Historical Courses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Historical Teaching Courses</h2>
        
        <div className="space-y-6">
          {courseCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-1">
                <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                  <div className="bg-teal-100 text-fju-secondary rounded-full w-7 h-7 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="bg-slate-50 rounded-md p-2">
                      <span className="text-sm text-fju-primary text-wrap leading-tight">{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Graduation Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Guidance for Graduation Projects</h2>
        
        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto flex justify-center">
              <table className="w-9/10">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2 font-semibold text-slate-900 w-1/3">學生姓名</th>
                    <th className="text-left py-2 px-2 font-semibold text-slate-900 w-1/2">專題題目</th>
                    <th className="text-left py-2 px-2 font-semibold text-slate-900 w-1/6">年度</th>
                  </tr>
                </thead>
                <tbody>
                  {graduationProjects.map((project, index) => (
                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-1.5 px-2 text-xs text-fju-primary leading-tight">{project.students}</td>
                      <td className="py-1.5 px-2 text-xs text-fju-primary leading-tight text-wrap">{project.title}</td>
                      <td className="py-1.5 px-2 text-xs text-slate-600 leading-tight">{project.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Speeches */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Academic Speeches</h2>
        
        <div className="space-y-3">
          {speeches.map((speech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-fju-accent">
              <CardContent className="p-2">
                <div className="flex items-start gap-3">
                  <div className="bg-fuchsia-100 text-fuchsia-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-2 text-wrap text-sm leading-tight">{speech.title}</h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Users className="w-3 h-3 flex-shrink-0" />
                        <span className="text-wrap leading-tight">{speech.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span>{speech.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Teaching


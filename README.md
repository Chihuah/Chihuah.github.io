# 董其樺 - 個人學術網站

[![Deploy to GitHub Pages](https://github.com/Chihuah/Chihuah.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Chihuah/Chihuah.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 輔仁大學醫學資訊與創新應用學士學位學程副教授的個人學術網站

🌐 **網站**: [https://chihuah.github.io](https://chihuah.github.io)

🌐 **舊站**（2025/06 後停止更新）: [Google Sites](https://sites.google.com/view/chihuah-fju/home)

---

## 專案簡介

展示智慧生物資訊相關研究、教學、論文與實驗室活動的靜態學術網站。內容以 **`src/data/` 單一資料源（SSOT）** 維護，多數頁面自動連動，無需在多個頁面重複修改。

### 網站功能

| 路由 | 頁面 | 主要資料來源 |
|------|------|--------------|
| `/` | Home | `personal.ts`、`timeline.ts`（Latest News）、`publications.ts`（亮點） |
| `/about` | About | 頁面內經歷／學歷；compute 類獎項來自 `projects.ts` |
| `/research` | Research | `projects.ts`（計畫分區）、`publications.ts`（overview 引用） |
| `/publications` | Publications | `publications.ts` |
| `/teaching` | Teaching | 頁面內課程／專題資料 |
| `/members` | Lab Members | 頁面內成員資料 |
| `/activities` | Activities | `timeline.ts`（合併 projects + publications + activities） |

### 技術棧

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** + **shadcn/ui**
- **React Router**、**pnpm**
- **GitHub Pages** + **GitHub Actions** 自動部署

---

## 快速開始

### 環境需求

- Node.js 18+
- pnpm（推薦）或 npm

### 安裝與開發

```bash
git clone https://github.com/Chihuah/Chihuah.github.io.git
cd Chihuah.github.io

pnpm install
pnpm run dev
```

瀏覽器開啟 [http://localhost:5173](http://localhost:5173)。

### 指令

| 指令 | 說明 |
|------|------|
| `pnpm run dev` | 啟動開發伺服器 |
| `pnpm run build` | 建置生產版本（輸出 `dist/`） |
| `pnpm run preview` | 本機預覽建置結果 |
| `pnpm run lint` | ESLint 檢查 |

---

## 內容維護指南（重點）

日常更新**幾乎只改 `src/data/`**，不必改頁面元件。

### 要改哪個檔？

| 你要新增／修改的內容 | 編輯檔案 | 通常不用改 |
|----------------------|----------|------------|
| 國科會 PI、大專生、教學實踐、產學、GPU 計算資源等**計畫** | [`src/data/projects.ts`](src/data/projects.ts) | `timeline.ts`、Research 頁 |
| **論文**書目、DOI、首頁亮點、Research 引用 | [`src/data/publications.ts`](src/data/publications.ts) | Publications / Home / Research |
| 姓名、職稱、聯絡、導覽列 | [`src/data/personal.ts`](src/data/personal.ts) | |
| 演講、畢業、開課等**非計畫／非論文**活動 | [`src/data/activities.ts`](src/data/activities.ts) | |
| 時間軸如何合併 | — | **[`timeline.ts`](src/data/timeline.ts) 不用動**（自動合併） |

### 資料流（自動連動）

```
projects.ts  ──────► Research 各計畫區塊
     │               About（compute 類 awards）
     │
publications.ts ───► Publications 列表
     │               Home Research Highlights（featured）
     │               Research overview references
     │
activities.ts  ────►（僅非計畫／非論文事件）
     │
     └──► timeline.ts 合併排序 ──► Activities 時間軸
                                   Home Latest News（最新 3 則）
```

`timeline.ts` 是**合併層**，不是內容主檔。它會：

1. 從 `projects.ts` 取出要上時間軸的計畫（預設會上；`showInTimeline: false` 可排除）
2. 從 `publications.ts` 取出 `showInTimeline: true` 的論文
3. 加上 `activities.ts` 全部
4. 依日期新 → 舊排序

---

### 1. 計畫 — `projects.ts`

`kind` 決定出現在 Research 的哪個區塊：

| `kind` | Research 區塊 |
|--------|----------------|
| `nstc-pi` | NSTC Projects（國科會／科技部 PI） |
| `nstc-student` | 指導國科會大專生研究計畫 |
| `moe-teaching` | 教育部教學實踐研究計畫 |
| `industry` | 產學合作 |
| `compute` | Research Support（如 NVIDIA GPU） |

範例（國科會 PI）：

```typescript
{
  id: 'nstc-pi-2026-example',
  kind: 'nstc-pi',
  title: '中文計畫名稱',
  titleEn: 'English Project Title',
  startDate: '2026-08-01',
  endDate: '2027-07-31',
  funding: 'NTD 500,000',
  description: '中文摘要……',
  descriptionEn: 'English summary…',
  // showInTimeline: false  // 若不要出現在 Activities / Latest News
}
```

教學實踐與產學同理，分別設 `kind: 'moe-teaching'`、`kind: 'industry'`（產學可加 `partner`；大專生加 `student`）。

---

### 2. 論文 — `publications.ts`

完整書目集中在此。常用旗標：

| 欄位 | 作用 |
|------|------|
| （基本）title, authors, journal, year, doi, type… | Publications 列表 |
| `showInTimeline: true` | 出現在 Activities / Latest News（**預設不上時間軸**） |
| `featured: true` + `featuredOrder` | Home 研究亮點 |
| `researchOverviewOrder` | Research 頁 overview 引用順序 |
| `shortName`, `summaryZh` / `summaryEn` | 時間軸／亮點顯示名稱與摘要 |

範例：

```typescript
{
  id: 'pub-2026-example',
  title: 'Full Paper Title…',
  authors: ['Chi-Hua Tung', '…'],
  journal: 'Journal Name',
  year: 2026,
  month: 3,
  type: 'SCI',
  category: 'journal',
  doi: '10.xxxx/xxxxx',
  shortName: 'ExampleNet',
  showInTimeline: true,
  featured: true,
  featuredOrder: 1,
  highlightDescription: 'One-line highlight for Home',
  summaryZh: '中文簡述……',
  summaryEn: 'Published in Journal Name…',
}
```

---

### 3. 一般活動 — `activities.ts`

只放**不是計畫、也不是論文**的事件（演講、畢業、開新課等）。

```typescript
{
  date: '2026-03',           // YYYY-MM
  type: 'speech',            // 見下表
  title: '中文標題',
  titleEn: 'English title',
  description: '中文描述',
  descriptionEn: 'English description',
  location: '可選',
  participants: ['可選'],
}
```

| `type` | 用途 |
|--------|------|
| `speech` | 學術演講／口頭報告 |
| `teaching` | 開課、教學活動 |
| `graduation` | 學生畢業／專題完成 |
| `collaboration` | 其他合作（非 `projects` 產學主檔時） |
| `research` / `award` | 其他研究或獲獎敘事（計畫類優先寫 `projects.ts`） |
| `publication` | **不建議手寫**；請寫 `publications.ts` 並設 `showInTimeline` |

建議：新活動放在陣列**較前面**或任意位置皆可（時間軸會再依 `date` 排序）；務必補齊中英文欄位。

---

### 4. 個人資訊 — `personal.ts`

姓名、職稱、單位、Email、電話、地址、導覽列 `navItems` 等。

---

### 5. 仍寫在頁面內的內容

以下尚未抽成 `data/`，需改對應頁面：

| 內容 | 檔案 |
|------|------|
| 經歷、學歷、發明展獎、教學榮譽 | `src/pages/About.tsx` |
| 課程列表、專題、演講場次 | `src/pages/Teaching.tsx` |
| 實驗室成員 | `src/pages/Members.tsx` |
| Research 敘事段落、未來方向 | `src/pages/Research.tsx`（計畫列表本身已連動） |

---

## 專案結構

```
Chihuah.github.io/
├── public/                 # 靜態資源（logo、CV、404、圖片）
├── src/
│   ├── assets/             # 打包用資源（大頭照等）
│   ├── components/
│   │   ├── layout/         # Header / Footer / Layout
│   │   └── ui/             # shadcn/ui
│   ├── data/               # ★ 內容 SSOT（日常主要改這裡）
│   │   ├── personal.ts     # 個人資訊、導覽
│   │   ├── projects.ts     # 計畫／研究支援
│   │   ├── publications.ts # 論文書目
│   │   ├── activities.ts   # 其他學術活動
│   │   └── timeline.ts     # 合併層（一般不改）
│   ├── hooks/              # useSEO 等
│   ├── lib/
│   ├── pages/              # 路由頁面
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── deploy-github-pages.sh
├── package.json
├── vite.config.js
└── README.md
```

---

## 部署

### 自動部署（推薦）

推送到 `main` 後，GitHub Actions 會建置並部署到 GitHub Pages：

```bash
git add .
git commit -m "Update website content"
git push origin main
```

約 2–5 分鐘生效；狀態見 [Actions](https://github.com/Chihuah/Chihuah.github.io/actions)。

### 本機建置檢查

```bash
pnpm run build
pnpm run preview
```

---

## 授權

MIT — 詳見 [LICENSE](LICENSE)（若有提供）。

---

## 聯絡

**董其樺 (Chi-Hua Tung)**

- Email: [chihua.tung.fju@gmail.com](mailto:chihua.tung.fju@gmail.com)
- 辦公室: 輔仁大學聖言樓 SF212
- 網站: [https://chihuah.github.io](https://chihuah.github.io)

---

## 致謝

[React](https://react.dev/) · [TypeScript](https://www.typescriptlang.org/) · [Vite](https://vitejs.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/) · [GitHub Pages](https://pages.github.com/) · [GitHub Actions](https://github.com/features/actions)

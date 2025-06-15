# 董其樺 - 個人學術網站

[![Deploy to GitHub Pages](https://github.com/Chihuah/Chihuah.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Chihuah/Chihuah.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 輔仁大學醫學資訊與創新應用學士學位學程副教授的個人學術網站

🌐 **網站連結**: [https://chihuah.github.io](https://chihuah.github.io)

---

## 📖 專案簡介

這是董其樺副教授的個人學術網站，展示其在智慧生物資訊領域的研究成果、教學經歷、學術發表等內容。網站採用現代化的響應式設計，提供優秀的使用者體驗。

### 🎯 網站特色

- **🏠 個人簡介** - 完整的學術背景和研究領域介紹
- **📚 研究成果** - 22 篇期刊論文展示，包含 15 篇 SCI 期刊
- **🎓 教學經歷** - 課程資訊和教學成果
- **👥 實驗室成員** - 指導學生和研究團隊介紹
- **🏆 獲獎記錄** - 國際發明展金牌等重要獎項
- **📱 響應式設計** - 完美支援桌面、平板、手機等各種設備
- **🌐 中英文支援** - 提供繁體中文介面

---

## 🛠️ 技術棧

### 前端框架

- **React 18** - 現代化的前端框架
- **TypeScript** - 型別安全的 JavaScript
- **Vite** - 快速的建置工具
- **Tailwind CSS** - 實用優先的 CSS 框架

### 開發工具

- **pnpm** - 高效能的套件管理器
- **ESLint** - 程式碼品質檢查
- **Git** - 版本控制系統

### 部署平台

- **GitHub Pages** - 免費的靜態網站託管
- **GitHub Actions** - 自動化部署流程

---

## 🚀 快速開始

### 環境需求

- Node.js 18+
- pnpm (推薦) 或 npm

### 安裝步驟

1. **克隆專案**

   ```bash
   git clone https://github.com/Chihuah/Chihuah.github.io.git
   cd Chihuah.github.io
   ```

2. **安裝依賴**

   ```bash
   # 使用 pnpm (推薦)
   pnpm install

   # 或使用 npm
   npm install
   ```

3. **啟動開發服務器**

   ```bash
   # 使用 pnpm
   pnpm run dev

   # 或使用 npm
   npm run dev
   ```

4. **開啟瀏覽器**

   前往 [http://localhost:5173](http://localhost:5173) 查看網站

---

## 📜 可用指令

| 指令               | 說明           | 用途               |
| ------------------ | -------------- | ------------------ |
| `pnpm run dev`     | 啟動開發服務器 | 本機開發和即時預覽 |
| `pnpm run build`   | 建置生產版本   | 產生優化的靜態檔案 |
| `pnpm run preview` | 預覽建置結果   | 本機測試生產版本   |
| `pnpm run lint`    | 檢查程式碼品質 | 確保程式碼符合規範 |

---

## 📁 專案結構

```
Chihuah.github.io/
├── public/                 # 靜態資源
│   ├── images/            # 圖片檔案
│   └── favicon.ico        # 網站圖示
├── src/                   # 原始碼
│   ├── components/        # React 組件
│   │   ├── layout/       # 布局組件
│   │   └── common/       # 通用組件
│   ├── pages/            # 頁面組件
│   ├── data/             # 靜態資料
│   ├── types/            # TypeScript 型別定義
│   ├── App.tsx           # 主應用程式組件
│   └── main.tsx          # 應用程式入口點
├── .github/              # GitHub 配置
│   └── workflows/        # GitHub Actions 工作流程
├── package.json          # 專案配置和依賴
├── vite.config.js        # Vite 配置
├── tailwind.config.js    # Tailwind CSS 配置
└── README.md             # 專案說明文件
```

---

## 🔧 自訂化指南

### 修改個人資訊

編輯 `src/data/personal.ts` 檔案來更新個人資訊：

```typescript
export const personalInfo = {
  name: "您的姓名",
  title: "您的職稱",
  email: "your.email@example.com",
  // ... 其他資訊
};
```

### 更新研究成果

在 `src/data/publications.ts` 中添加或修改論文資訊：

```typescript
export const publications = [
  {
    title: "論文標題",
    authors: "作者列表",
    journal: "期刊名稱",
    year: 2024,
    // ... 其他資訊
  },
];
```

### 修改網站樣式

- **顏色主題**: 編輯 `tailwind.config.js`
- **布局樣式**: 修改 `src/components/layout/` 下的組件
- **頁面內容**: 編輯 `src/pages/` 下的對應頁面

---

## 🚀 部署說明

### 自動部署 (推薦)

本專案已配置 GitHub Actions 自動部署：

1. **推送程式碼到 main 分支**

   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

2. **GitHub Actions 自動執行**

   - 安裝依賴
   - 建置專案
   - 部署到 GitHub Pages

3. **網站自動更新**
   - 通常在 2-5 分鐘內完成
   - 可在 Actions 頁面查看部署狀態

### 手動部署

如果需要手動部署：

```bash
# 建置專案
pnpm run build

# 部署到 GitHub Pages
# (需要額外配置 gh-pages 套件)
```

---

## 🌐 網站功能

### 主要頁面

- **🏠 首頁** - 個人簡介和研究亮點
- **👤 關於我** - 詳細的學術背景
- **📚 研究成果** - 論文發表和研究項目
- **🎓 教學經歷** - 課程和教學成果
- **👥 實驗室成員** - 指導學生介紹
- **🏆 獲獎記錄** - 重要獎項和榮譽
- **📞 聯絡資訊** - 聯絡方式和辦公室資訊

### 技術特色

- **📱 響應式設計** - 支援各種螢幕尺寸
- **⚡ 快速載入** - 優化的效能表現
- **🔍 SEO 友善** - 搜尋引擎最佳化
- **♿ 無障礙支援** - 符合網頁無障礙標準
- **🌙 現代化 UI** - 簡潔專業的設計風格

---

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

---

## 📞 聯絡資訊

**董其樺 (Chi-Hua Tung)**

- 📧 Email: [chihua.tung.fju@gmail.com](mailto:chihua.tung.fju@gmail.com)
- 🏢 辦公室: 輔仁大學聖言樓 SF212 室
- 🌐 網站: [https://chihuah.github.io](https://chihuah.github.io)

---

## 🙏 致謝

感謝以下技術和服務：

- [React](https://reactjs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 程式語言
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Vite](https://vitejs.dev/) - 建置工具
- [GitHub Pages](https://pages.github.com/) - 網站託管
- [GitHub Actions](https://github.com/features/actions) - 自動化部署

---

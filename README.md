<<<<<<< HEAD

# 個人學術網站

董其樺副教授的個人學術網站，展示研究成果、出版品、教學經歷等學術資訊。

## 🌟 網站特色

- **現代化設計**: 使用 React + TypeScript + Tailwind CSS
- **響應式布局**: 完美適應桌面和移動設備
- **學術專業**: 符合學術界標準的專業展示
- **易於維護**: 模組化設計，便於內容更新

## 🚀 快速開始

### 本地開發

```bash
# 克隆專案
git clone https://github.com/YOUR_USERNAME/academic-website.git
cd academic-website

# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm run dev

# 瀏覽器訪問 http://localhost:5173
```

### 建置生產版本

```bash
# 建置專案
pnpm run build

# 預覽建置結果
pnpm run preview
```

## 📦 部署到 GitHub Pages

### 自動部署 (推薦)

1. **Fork 或創建儲存庫**

   - 儲存庫名稱: `academic-website` 或 `YOUR_USERNAME.github.io`
   - 設為 Public

2. **推送代碼到 GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **啟用 GitHub Pages**

   - 前往儲存庫 Settings > Pages
   - Source 選擇 "GitHub Actions"
   - 推送代碼後會自動部署

4. **訪問網站**
   - 網址: `https://YOUR_USERNAME.github.io/academic-website` 或 `https://YOUR_USERNAME.github.io/`

### 自訂域名 (可選)

1. **購買域名** (例如: `your-name.com`)

2. **設定 DNS**

   ```
   CNAME: www.your-domain.com -> YOUR_USERNAME.github.io
   A: your-domain.com -> 185.199.108.153
   ```

3. **GitHub 設定**
   - Settings > Pages > Custom domain
   - 輸入您的域名並勾選 "Enforce HTTPS"

## 🛠️ 技術棧

- **前端框架**: React 18
- **程式語言**: TypeScript
- **樣式方案**: Tailwind CSS
- **UI 組件**: shadcn/ui
- **圖標庫**: Lucide React
- **路由**: React Router DOM
- **建置工具**: Vite
- **包管理器**: pnpm

## 📁 專案結構

```
academic-website/
├── public/                 # 靜態資源
│   ├── 404.html           # GitHub Pages SPA 重定向
│   └── favicon.ico        # 網站圖標
├── src/
│   ├── components/        # React 組件
│   │   ├── layout/       # 布局組件
│   │   └── ui/           # UI 組件
│   ├── pages/            # 頁面組件
│   ├── data/             # 靜態數據
│   ├── types/            # TypeScript 類型
│   └── styles/           # 樣式文件
├── .github/
│   └── workflows/        # GitHub Actions
│       └── deploy.yml    # 自動部署配置
└── dist/                 # 建置輸出 (自動生成)
```

## 🔧 配置說明

### Vite 配置

- **base**: 根據部署環境自動設定路徑
- **build**: 優化建置輸出
- **alias**: 設定路徑別名 (@/ -> src/)

### GitHub Actions

- **觸發**: 推送到 main 分支時自動執行
- **流程**: 安裝依賴 → 建置 → 部署到 GitHub Pages
- **權限**: 自動配置必要的部署權限

## 📝 內容更新

### 添加新頁面

1. 在 `src/pages/` 創建新組件
2. 在 `src/App.tsx` 添加路由
3. 在導航選單添加連結

### 更新個人資訊

1. 編輯 `src/data/personal.ts`
2. 更新相關頁面內容
3. 推送更改自動部署

### 添加新出版品

1. 更新出版品數據文件
2. 在 Publications 頁面展示
3. 更新首頁統計數據

## 🎨 自訂樣式

### 修改主題色彩

編輯 `src/styles/globals.css`:

```css
:root {
  --primary: 220 90% 56%; /* 主色調 */
  --secondary: 220 14.3% 95.9%; /* 次要色調 */
  /* 其他顏色變數... */
}
```

### 添加新組件

使用 shadcn/ui CLI:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

## 🔍 SEO 優化

- **Meta 標籤**: 已配置基本 SEO 標籤
- **結構化數據**: 可添加 JSON-LD 結構化數據
- **Sitemap**: 可生成 sitemap.xml
- **robots.txt**: 可配置搜尋引擎爬蟲規則

## 📊 分析和監控

### Google Analytics (可選)

1. 創建 GA4 屬性
2. 在 `index.html` 添加追蹤代碼
3. 配置事件追蹤

### 性能監控

- 使用 Lighthouse 檢查性能
- 監控 Core Web Vitals
- 優化圖片和資源載入

## 🤝 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯絡方式

- **Email**: chihua.tung.fju@gmail.com
- **網站**: https://YOUR_USERNAME.github.io/academic-website
- **GitHub**: https://github.com/YOUR_USERNAME/academic-website

---

_最後更新: 2025 年 6 月_

=======

# Chihuah.github.io

> > > > > > > e4778be9fb60bfd9420a00c47b87cef5f52cc62b

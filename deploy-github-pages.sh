#!/bin/bash

# GitHub Pages 快速部署腳本
# 使用方法: ./deploy-github-pages.sh

echo "🚀 開始部署到 GitHub Pages..."

# 檢查是否在正確的目錄
if [ ! -f "package.json" ]; then
    echo "❌ 錯誤: 請在專案根目錄執行此腳本"
    exit 1
fi

# 檢查是否已安裝依賴
if [ ! -d "node_modules" ]; then
    echo "📦 安裝依賴中..."
    pnpm install
fi

# 建置專案
echo "🔨 建置專案中..."
pnpm run build

if [ $? -ne 0 ]; then
    echo "❌ 建置失敗，請檢查錯誤訊息"
    exit 1
fi

echo "✅ 建置完成！"

# 檢查是否已初始化 Git
if [ ! -d ".git" ]; then
    echo "🔧 初始化 Git 儲存庫..."
    git init
    git branch -M main
fi

# 添加所有文件
echo "📝 添加文件到 Git..."
git add .

# 提交更改
echo "💾 提交更改..."
read -p "請輸入提交訊息 (預設: Update website): " commit_message
commit_message=${commit_message:-"Update website"}
git commit -m "$commit_message"

# 檢查是否已設定遠端儲存庫
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 設定 GitHub 遠端儲存庫..."
    read -p "請輸入您的 GitHub 用戶名: " username
    read -p "請輸入儲存庫名稱 (預設: academic-website): " repo_name
    repo_name=${repo_name:-"academic-website"}
    
    git remote add origin "https://github.com/$username/$repo_name.git"
    echo "✅ 已設定遠端儲存庫: https://github.com/$username/$repo_name.git"
fi

# 推送到 GitHub
echo "🚀 推送到 GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 部署完成！"
    echo ""
    echo "📋 後續步驟:"
    echo "1. 前往 GitHub 儲存庫設定頁面"
    echo "2. 點擊 Settings > Pages"
    echo "3. Source 選擇 'GitHub Actions'"
    echo "4. 等待自動部署完成 (約 2-5 分鐘)"
    echo ""
    echo "🌐 您的網站將在以下網址可用:"
    
    # 嘗試從 git remote 獲取儲存庫資訊
    remote_url=$(git remote get-url origin)
    if [[ $remote_url =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
        username="${BASH_REMATCH[1]}"
        repo_name="${BASH_REMATCH[2]}"
        echo "   https://$username.github.io/$repo_name"
    else
        echo "   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
    fi
    echo ""
else
    echo "❌ 推送失敗，請檢查："
    echo "1. GitHub 儲存庫是否存在"
    echo "2. 是否有推送權限"
    echo "3. 網路連線是否正常"
fi


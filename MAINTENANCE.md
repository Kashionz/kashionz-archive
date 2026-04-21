# 專案維護清單（kashionz-archive）

適用專案：`Astro + astro-pure`  
維護目標：穩定發文、降低部署失敗率、保持內容與依賴健康

## 0. 基本資訊

- Node 版本：建議 `18+`
- 套件管理：`bun`
- 常用指令：
  - 啟動開發：`bun dev`
  - 新增文章：`bun pure new <post-slug>`
  - 建置檢查：`bun run build`
  - 型別檢查：`bun check`
  - 程式碼格式化：`bun format`
  - Lint：`bun lint`
  - 一鍵整理：`bun yijiansilian`

## 1. 每次發文流程（必做）

### A. 建立與撰寫

- [ ] 執行 `bun pure new <post-slug>` 建立文章骨架
- [ ] 在 `src/content/blog/<post-slug>/index.md`（或 `.mdx`）補齊 frontmatter：
  - [ ] `title`（建議 <= 60 字）
  - [ ] `description`（建議 <= 160 字）
  - [ ] `publishDate`（正確日期格式）
- [ ] 設定 `tags`（避免重複、統一大小寫）
- [ ] 如有封面圖，確認 `heroImage` 路徑與檔案存在
- [ ] 草稿文確認 `draft: true`；要正式發布時改 `draft: false`

### B. 本機驗證

- [ ] 執行 `bun dev` 手動檢查：
  - [ ] 文章頁排版正常
  - [ ] 圖片可顯示
  - [ ] 程式碼區塊與數學公式（若有）正常
  - [ ] 標籤頁與列表頁可找到該文章
- [ ] 執行 `bun run build` 確認可成功建置

### C. 提交前品質檢查

- [ ] 執行 `bun yijiansilian`（或至少跑 `bun lint && bun check && bun format`）
- [ ] 確認沒有不必要變更（例如編輯器暫存、測試檔）
- [ ] 再執行一次 `bun run build`

## 2. 每週維護（建議）

- [ ] 檢查留言系統 Waline 是否可正常載入與送出
- [ ] 隨機抽查 2~3 篇舊文：
  - [ ] 外部連結是否失效
  - [ ] 圖片是否失連
- [ ] 檢查首頁、文章列表、標籤頁是否正常
- [ ] 若近期有改設定，確認 RSS 與 sitemap 正常輸出

## 3. 每月維護（建議）

### A. 依賴與安全

- [ ] 執行 `bun update` 更新依賴
- [ ] 執行 `bun install` 讓 lock 檔同步
- [ ] 執行 `bun run build` 驗證更新後可建置
- [ ] 執行 `bun dev` 快速巡檢主要頁面

### B. 內容與 SEO 衛生

- [ ] 檢查新文章的 `title`/`description` 是否過短或重複
- [ ] 確認文章封面與社群分享圖（social card）可用
- [ ] 檢查 `src/site.config.ts` 的站點資訊是否仍正確（標題、描述、社群連結）

### C. 備份

- [ ] 至少備份以下路徑：
  - [ ] `src/content/`
  - [ ] `src/site.config.ts`
  - [ ] `public/`（若放自有素材）

## 4. 發版 / 部署當天清單

- [ ] `git pull` 同步遠端
- [ ] `bun install`
- [ ] `bun run build`
- [ ] 確認建置產物無錯誤後再推送
- [ ] 部署後檢查：
  - [ ] 首頁
  - [ ] 最新文章頁
  - [ ] `/blog`
  - [ ] `/tags`
  - [ ] `/rss.xml`

## 5. 常見故障快速排查

### A. `bun run build` 失敗

- [ ] 先看錯誤是否來自 frontmatter 欄位缺失（最常見）
- [ ] 檢查 `publishDate` 是否為合法日期
- [ ] 檢查圖片路徑是否正確（相對路徑是否在同資料夾）
- [ ] 執行 `bun sync && bun check` 看型別或內容 schema 錯誤

### B. 頁面正常但樣式怪異

- [ ] 執行 `bun format`
- [ ] 檢查是否誤改 `src/assets/styles/` 或 `uno.config.ts`
- [ ] 本機重開 `bun dev` 再測一次

### C. 留言區失效

- [ ] 檢查 `src/site.config.ts` 內 `waline.server` 是否可連線
- [ ] 檢查部署環境是否擋到第三方請求

## 6. 可選優化（有空再做）

- [ ] 在 CI 加入 `bun run build` 檢查，避免壞版進主分支
- [ ] 建立發文模板（固定 frontmatter 欄位）
- [ ] 為舊文補齊封面圖與摘要，提高列表一致性

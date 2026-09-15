import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      // public/ 底下的靜態頁（實作紀錄、簡報）不經 Nuxt 渲染，
      // 否則預渲染產生的 SPA 頁面會覆蓋掉複製過來的原始檔案
      ignore: ['/profile', '/slides'],
    },
  },
  // GitHub Pages 專案頁的 baseURL 由 CI 以 NUXT_APP_BASE_URL 環境變數注入
})

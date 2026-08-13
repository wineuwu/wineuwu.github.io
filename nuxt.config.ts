import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  // GitHub Pages 專案頁的 baseURL 由 CI 以 NUXT_APP_BASE_URL 環境變數注入
})

// CV 內容單一來源。【】為 placeholder，正式內容由本人填入，不可自行代填。

export interface ContactLink {
  label: string
  /** 沒有 href 的是 placeholder，只顯示文字 */
  href?: string
  /** 對應 app.vue 裡 icons 的 key */
  icon?: 'email' | 'github' | 'linkedin' | 'ithome'
}

export interface ExperienceSection {
  heading?: string
  bullets: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  intro?: string
  sections: ExperienceSection[]
}

export const header = {
  name: '吳凱雯 WU-KAI-WEN',
  title: 'Senior Frontend Engineer',
  contacts: [
    { label: 'Email', href: 'mailto:asgh03226@gmail.com', icon: 'email' },
    { label: 'github', href: 'https://github.com/wineuwu', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wukaiwan', icon: 'linkedin' },
    { label: 'iThome', href: 'https://ithelp.ithome.com.tw/users/20139636', icon: 'ithome' },
  ] as ContactLink[],
}

// 文字中的 **粗體** 標記會在頁面上以黑色粗體凸顯（renderBold）
export const summary = [
  '具 5+ 年前端開發經驗，長期負責大型房產平台 B2C 產品與 B2B 內部工具，具備從**需求拆解、架構設計、技術選型到開發、測試與部署**的完整實務經驗，並持續承擔跨專案的技術判斷與工程流程改善。',
  '熟悉多種前端架構並行的產品環境，包含 **Vue 3 MPA、後端套版、既有自定義原生 JavaScript 架構（負責新功能開發與舊系統維護優化）、Nuxt SSR 與 Chrome Extension**，能依產品需求、SEO、效能與維護成本進行架構評估與技術選型。',
  '除產品開發外，近年開始主導 **AI-assisted Development 與工程流程改善**，將 AI 工具導入團隊開發流程，建立專案知識庫、Skill、Eval 與回歸驗證機制，並推動規格驅動開發與跨部門自動化流程，將個人開發經驗逐步轉化為**可複用的工程方法與團隊資產**。',
  '曾於 Vue.js Taiwan Meetup 擔任講者，分享 Chrome Extension 結合 Vue 的實作經驗；目前持續研究 AI Agent、Coding Agent 與 Harness 等 AI × Engineering 應用。',
]

/** 把 **文字** 轉成 <strong>，其餘原樣輸出（內容為自家靜態資料，無注入風險） */
export function renderBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Frontend Engineering',
    items: [
      'Vue 3', 'Composition API', 'TypeScript', 'JavaScript ES6+',
      'Nuxt 3 / Nuxt 4', 'SSR / CSR', 'Vite', 'Tailwind CSS',
      'SPA / MPA', 'RWD / AWD', 'Chrome Extension', 'Side Panel',
    ],
  },
  {
    category: 'Architecture & System Design',
    items: [
      '多架構並行產品技術判斷', 'Vue 3 MPA + 後端套版', 'Nuxt SSR / CSR 混合渲染',
      'Desktop / Mobile AWD', 'RWD 單一程式碼庫', '跨專案共用邏輯',
      'Domain / Cookie / URL State', 'SEO / Meta', '第三方 SDK 整合',
    ],
  },
  {
    category: 'Engineering',
    items: [
      'Vitest', 'Vue Test Utils', 'CI/CD', 'Git',
      'Git-based Workflow', '多環境管理',
    ],
  },
  {
    category: 'AI × Engineering',
    items: ['Claude Code', 'AI Agent', 'Skill', 'Eval', 'SDD', 'Harness'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'HouseFun 好房網',
    role: 'Senior Frontend Developer',
    period: '2021.03 – Present',
    intro:
      '負責房產網站 B2C 核心產品與 B2B 內部工具，參與產品需求、技術方案、架構設計、開發、測試與部署；同時維護多種技術架構，並逐步承擔團隊工程流程與 AI 開發方法導入。',
    sections: [
      {
        heading: '架構設計與產品開發',
        bullets: [
          '同時維護 **4+ 種不同前端架構**，包含 Vue 3 MPA + 後端套版、自製路由行動版、Nuxt SSR 與 Chrome Extension，依產品生命週期、SEO、效能與既有系統限制進行技術方案判斷。',
          '參與 Nuxt SSR 新產品線從架構建立至正式上線，負責 SSR / CSR 行為、SEO Meta、共用邏輯抽取、測試與行為追蹤等前端基礎建設。',
          '負責行動版主要功能開發與架構維護，並完成全站 SEO 內容結構優化。',
        ],
      },
      {
        heading: 'Chrome Extension',
        bullets: [
          '擔任內部 Chrome Extension 主要開發者近 3 年，負責多數核心功能與長期維護。',
          '建立 Chrome Extension 與 Vue 的整合架構，在第三方網站限制與封鎖機制下重新調整產品架構，將原有頁面注入模式轉為 **Side Panel 架構**，維持產品可用性。',
          '在 Extension 專案導入 Vitest 單元測試，提高核心邏輯的可驗證性與後續維護效率。',
        ],
      },
      {
        heading: 'Engineering Infrastructure',
        bullets: [
          '撰寫前端專案 CI/CD 執行流程設定，串接自動化建置與部署。',
          '在專案導入 Vitest、Vue Test Utils 與 data-test selector，測試以 AI 輔助產出，維持核心邏輯的可驗證性。',
        ],
      },
      {
        heading: 'AI × Engineering',
        bullets: [
          '主導 AI / Agent 工具導入團隊日常開發流程，將個人使用經驗轉化為團隊可複用的開發方法。',
          '建立以 **Claude Code Skill** 為核心的團隊知識庫，將專案架構、開發規範與實作經驗結構化，降低 AI 與新成員理解既有系統的成本。',
          '設計「**研究 → 建檔 → Eval 出題 → 驗收 → 回歸驗證**」的知識庫驗證流程，避免 AI 知識庫僅停留在文件整理，而能持續驗證產出品質。',
          '推動 **Specification-Driven Development（SDD）**，建立從提案、實作到歸檔的開發流程，提升 AI 協作開發的一致性與可追蹤性。',
          '將原本人工彙整的資料整理流程導入 AI 輔助自動化，產出固定格式報表，降低重複性工作。',
          '協助設計部門建立以 **Git 版控為單一來源**的素材管理流程，將設計稿匯出、版本管理與前端素材同步串接，降低人工交付與版本比對成本。',
        ],
      },
    ],
  },
  {
    company: '艾鍗科技有限公司',
    role: 'Website Designer',
    period: '2019.08 – 2020.10',
    sections: [
      {
        bullets: [
          '負責企業網站視覺設計、頁面製作與網站內容規劃。',
          '參與網站資訊架構、版型設計與內容整理，協助客戶將需求轉換為實際網站架構。',
          '負責平面視覺與網頁製作，累積從設計到前端實作的完整經驗。',
        ],
      },
    ],
  },
  {
    company: '台灣赤魂有限公司',
    role: 'UI Design Intern',
    period: '2018.07 – 2019.01',
    sections: [
      {
        bullets: [
          '協助 UI / UX 設計、APP 測試與網站相關製作。',
          '參與介面設計與產品測試流程，建立產品設計與前端開發的基礎經驗。',
        ],
      },
    ],
  },
]

export const speaking = {
  event: 'Vue.js Taiwan Meetup',
  topic: 'Chrome Extension × Vue',
  link: 'https://vuejs.kktix.cc/',
}

export const works = [
  {
    title: '前端工程實作紀錄',
    note: 'Skill 體系建置 · Chrome 擴充套件架構 · 工作流程自動化',
    href: '/profile',
  },
  {
    title: 'Chrome Extension × Vue',
    note: '簡報',
    href: '/slides/0330-ext-vue',
  },
  {
    title: 'Vue.js Taiwan · Slidev',
    note: '簡報',
    href: '/slides/1025-vue-tw-slidev',
  },
]

export const education = {
  school: '大同大學',
  detail: '媒體設計學系互動媒體組 · 2019',
}

export const seo = {
  title: '吳凱雯｜Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer｜Vue / Nuxt / Frontend Architecture｜AI × Engineering',
}

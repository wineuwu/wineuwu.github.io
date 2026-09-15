<script setup lang="ts">
import { header, summary, skills, experiences, speaking, works, education, seo, renderBold } from '@/data/cv'

useHead({ htmlAttrs: { lang: 'zh-Hant-TW' } })

// 聯絡方式 icon（inline SVG path，24x24，填色跟隨文字顏色）
const icons: Record<string, string> = {
  email:
    'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.236l-8 5-8-5V6l8 5 8-5v2.236z',
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  // 技術文章（iThome 無通用品牌 icon，以文件圖示代表）
  ithome:
    'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
}
useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
})
</script>

<template>
  <main class="mx-auto max-w-[960px] px-6 py-12 text-neutral-800 sm:px-10 sm:py-16">
    <!-- Header / Personal Information -->
    <header class="border-b border-neutral-200 pb-8">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{{ header.name }}</h1>
      <p class="mt-3 text-xl font-medium sm:text-2xl">{{ header.title }}</p>
      <ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-base text-neutral-600">
        <li v-for="contact in header.contacts" :key="contact.label">
          <component
            :is="contact.href ? 'a' : 'span'"
            :href="contact.href"
            :target="contact.href?.startsWith('http') ? '_blank' : undefined"
            :rel="contact.href?.startsWith('http') ? 'noopener' : undefined"
            class="flex items-center gap-1.5"
            :class="contact.href && 'hover:text-neutral-800'"
          >
            <svg
              v-if="contact.icon"
              class="size-4 shrink-0 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            ><path :d="icons[contact.icon]" /></svg>
            <span :class="contact.href && 'underline underline-offset-2'">{{ contact.label }}</span>
          </component>
        </li>
      </ul>
    </header>

    <!-- Professional Summary -->
    <section class="mt-14">
      <h2 class="text-2xl font-semibold tracking-tight">Professional Summary</h2>
      <div
        class="mt-5 max-w-2xl space-y-5 text-base leading-loose text-neutral-700 sm:text-lg sm:leading-loose [&_strong]:font-semibold [&_strong]:text-neutral-800"
      >
        <p v-for="(paragraph, i) in summary" :key="i" v-html="renderBold(paragraph)" />
      </div>
    </section>

    <!-- Core Skills -->
    <section class="mt-14">
      <h2 class="text-2xl font-semibold tracking-tight">Core Skills</h2>
      <div class="mt-5 space-y-6">
        <div v-for="group in skills" :key="group.category">
          <h3 class="text-base font-semibold text-neutral-800">{{ group.category }}</h3>
          <ul class="mt-2.5 flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="rounded border border-neutral-200 px-2.5 py-1 text-[15px] text-neutral-700"
            >{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="mt-14">
      <h2 class="text-2xl font-semibold tracking-tight">Work Experience</h2>
      <div class="mt-6 space-y-12">
        <article v-for="job in experiences" :key="job.company">
          <div class="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 class="text-lg font-semibold">
              {{ job.company }}<span class="font-normal text-neutral-600">｜{{ job.role }}</span>
            </h3>
            <p class="text-base text-neutral-500">{{ job.period }}</p>
          </div>
          <p v-if="job.intro" class="mt-3 max-w-2xl text-base leading-loose text-neutral-600">
            {{ job.intro }}
          </p>
          <div v-for="(block, i) in job.sections" :key="i" class="mt-5">
            <h4 v-if="block.heading" class="text-base font-semibold text-neutral-800">
              {{ block.heading }}
            </h4>
            <ul
              class="mt-2.5 max-w-2xl list-disc space-y-2.5 pl-5 text-base leading-relaxed text-neutral-700 [&_strong]:font-semibold [&_strong]:text-neutral-800"
            >
              <li v-for="bullet in block.bullets" :key="bullet" v-html="renderBold(bullet)" />
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Speaking -->
    <section class="mt-14">
      <h2 class="text-2xl font-semibold tracking-tight">Speaking</h2>
      <p class="mt-5 text-base leading-relaxed text-neutral-700">
        <a
          :href="speaking.link"
          target="_blank"
          rel="noopener"
          class="font-medium text-neutral-800 underline underline-offset-2"
        >{{ speaking.event }}</a>
        <span class="text-neutral-600">｜{{ speaking.topic }}</span>
      </p>
    </section>

    <!-- Works & Talks -->
    <section class="mt-14">
      <h2 class="text-2xl font-semibold tracking-tight">Works &amp; Talks</h2>
      <ul class="mt-5 space-y-3">
        <li v-for="work in works" :key="work.href">
          <a
            :href="work.href"
            class="text-base font-medium text-neutral-800 underline underline-offset-2 hover:text-neutral-600"
          >{{ work.title }}</a>
          <span class="text-base text-neutral-600">｜{{ work.note }}</span>
        </li>
      </ul>
    </section>

    <!-- Education -->
    <section class="mt-14 border-t border-neutral-200 pt-10">
      <h2 class="text-2xl font-semibold tracking-tight">Education</h2>
      <p class="mt-5 text-base font-medium">{{ education.school }}</p>
      <p class="mt-1 text-base text-neutral-600">{{ education.detail }}</p>
    </section>
  </main>
</template>

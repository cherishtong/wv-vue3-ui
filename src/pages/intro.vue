<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import { WvButton } from "@/wv-components";
</script>

<template>
  <div class="py-8">
    <!-- Hero -->
    <div class="mb-16">
      <span class="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-vermilion mb-6">
        <span class="w-6 h-0.5 bg-vermilion" />Design System
      </span>
      <h1 class="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold text-ink leading-none mb-4">无为设计系统</h1>
      <p class="text-lg text-gray-400 font-light mb-2">WuWei Design System v0.1</p>
      <p class="text-base text-gray-500 leading-relaxed max-w-[40rem] font-light">
        以中国传统哲学 <strong>「无为」</strong> 为精神内核，融合 2026 年设计趋势——液态玻璃、空间感、AI 对话、功能性微动效——构建的现代 Vue 3 UI 组件库。<br><br>
        <strong>Vue 3 + Tailwind CSS 4</strong>，shadcn-vue 组件模式，开箱即用。
      </p>
      <div class="flex gap-3 mt-6">
        <router-link to="/install">
          <WvButton variant="vermilion">快速开始</WvButton>
        </router-link>
        <router-link to="/components/button">
          <WvButton variant="ghost">浏览组件</WvButton>
        </router-link>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
      <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div class="font-serif text-xl font-bold mb-2 text-ink">28 个组件</div>
        <p class="text-sm text-gray-500">覆盖基础、导航、数据展示、反馈、AI 全场景</p>
      </div>
      <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div class="font-serif text-xl font-bold mb-2 text-ink">shadcn-vue 模式</div>
        <p class="text-sm text-gray-500">CVA 变体管理 · cn() 类名合并 · 独立 SFC 组件</p>
      </div>
      <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div class="font-serif text-xl font-bold mb-2 text-ink">Tailwind CSS 4</div>
        <p class="text-sm text-gray-500">CSS-first 配置 · @theme 设计令牌 · 原生 TW4</p>
      </div>
      <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div class="font-serif text-xl font-bold mb-2 text-ink">无障碍</div>
        <p class="text-sm text-gray-500">Radix Vue 基元 · 键盘导航 · ARIA 支持</p>
      </div>
      <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div class="font-serif text-xl font-bold mb-2 text-ink">液态玻璃</div>
        <p class="text-sm text-gray-500">2026 标志美学 · 半透明毛玻璃 · 弹性悬浮</p>
      </div>
      <div class="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div class="font-serif text-xl font-bold mb-2 text-ink">东方美学</div>
        <p class="text-sm text-gray-500">墨色为骨 · 纸张为底 · 朱砂为血 · 文房气质</p>
      </div>
    </div>

    <!-- 设计理念 -->
    <h2 class="font-serif text-2xl font-bold text-ink mb-4 pt-8 border-t border-gray-100">设计理念</h2>
    <blockquote class="border-l-4 border-vermilion pl-6 py-2 my-6 font-serif text-lg text-gray-600">
      「道常无为而无不为」
      <cite class="block text-sm text-gray-400 mt-2 not-italic">—《道德经》第三十七章</cite>
    </blockquote>
    <p class="text-base text-gray-500 leading-relaxed max-w-[40rem]">
      顺应自然规律，不妄为、不强为。让界面自化，让体验归于宁静。<br>
      在极简中寻找存在感，在留白中呈现力量。
    </p>
  </div>
</template>

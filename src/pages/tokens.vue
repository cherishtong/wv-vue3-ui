<script setup lang="ts">
import DocsPropsTable from "@/docs/DocsPropsTable.vue";

const colors = [
  { name: "ink 墨色", css: "text-ink bg-ink", hex: "#1a1a1b", bg: "bg-ink" },
  { name: "paper 纸张", css: "bg-paper", hex: "#f9f6f1", bg: "bg-paper border border-gray-200" },
  { name: "vermilion 朱砂", css: "text-vermilion bg-vermilion", hex: "#b91c1c", bg: "bg-vermilion" },
  { name: "dark-matrix 矩阵黑", css: "bg-dark-matrix", hex: "#09090b", bg: "bg-dark-matrix" },
];

const semanticColors = [
  { name: "success", css: "", hex: "#15803d", bg: "bg-[#15803d]" },
  { name: "warning", css: "", hex: "#b45309", bg: "bg-[#b45309]" },
  { name: "error", css: "", hex: "#b91c1c", bg: "bg-vermilion" },
  { name: "info", css: "", hex: "#1a1a1b", bg: "bg-ink" },
];

const spacingData = [
  { name: "p-1 / m-1", value: "0.25rem (4px)", usage: "微间距" },
  { name: "p-2 / m-2", value: "0.5rem (8px)", usage: "紧凑间距" },
  { name: "p-3 / m-3", value: "0.75rem (12px)", usage: "常规内边距" },
  { name: "p-4 / m-4", value: "1rem (16px)", usage: "标准内边距" },
  { name: "p-6 / m-6", value: "1.5rem (24px)", usage: "组件间距" },
  { name: "p-8 / m-8", value: "2rem (32px)", usage: "大区块" },
];

const radiusData = [
  { name: "rounded-sm", value: "0.125rem (2px)", usage: "微圆角" },
  { name: "rounded", value: "0.25rem (4px)", usage: "标签、徽标" },
  { name: "rounded-md", value: "0.375rem (6px)", usage: "输入框、按钮" },
  { name: "rounded-lg", value: "0.5rem (8px)", usage: "卡片" },
  { name: "rounded-xl", value: "0.75rem (12px)", usage: "玻璃卡" },
  { name: "rounded-2xl", value: "1rem (16px)", usage: "大卡片" },
  { name: "rounded-full", value: "9999px", usage: "头像、药丸按钮" },
];

const shadowData = [
  { name: "shadow-depth-1", value: "0 1px 2px rgba(0,0,0,0.04)", usage: "轻微浮起" },
  { name: "shadow-depth-2", value: "0 4px 12px rgba(0,0,0,0.06)", usage: "卡片悬浮" },
  { name: "shadow-depth-3", value: "0 12px 40px rgba(0,0,0,0.1)", usage: "弹层层级" },
  { name: "shadow-depth-4", value: "0 24px 80px rgba(0,0,0,0.14)", usage: "模态层级" },
];

const zIndexData = [
  { name: "--wu-z-dropdown", value: "10", usage: "下拉菜单" },
  { name: "--wu-z-sticky", value: "20", usage: "粘性元素" },
  { name: "--wu-z-fixed", value: "30", usage: "固定导航" },
  { name: "--wu-z-modal-backdrop", value: "40", usage: "模态遮罩" },
  { name: "--wu-z-modal", value: "50", usage: "模态框" },
  { name: "--wu-z-popover", value: "60", usage: "气泡弹出" },
  { name: "--wu-z-tooltip", value: "70", usage: "提示工具" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">设计令牌</h1>
    <p class="text-gray-500 mb-8">WuWei Design 的设计令牌定义，通过 Tailwind CSS 4 的 @theme 配置使用。</p>

    <!-- 品牌色 -->
    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4 pt-8 border-t border-gray-100">品牌色 Brand Colors</h2>
    <p class="text-sm text-gray-500 mb-6">以中国传统文房美学为源——<strong>墨色</strong>为骨、<strong>纸张</strong>为底、<strong>朱砂</strong>为血。</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      <div v-for="c in colors" :key="c.name" class="rounded-xl overflow-hidden border border-black/[0.06]">
        <div :class="[c.bg, 'h-20']" />
        <div class="p-3 bg-white">
          <p class="font-semibold text-sm m-0">{{ c.name }}</p>
          <p class="font-mono text-xs text-gray-400 m-0">{{ c.hex }}</p>
          <p class="font-mono text-[0.65rem] text-vermilion m-0">{{ c.css }}</p>
        </div>
      </div>
    </div>

    <!-- 语义色 -->
    <h3 class="font-serif text-lg font-bold text-ink mt-8 mb-4">语义色</h3>
    <div class="grid grid-cols-4 gap-3 mb-8">
      <div v-for="c in semanticColors" :key="c.name" class="rounded-xl overflow-hidden border border-black/[0.06]">
        <div :class="[c.bg, 'h-16']" />
        <div class="p-2 bg-white text-center">
          <p class="font-semibold text-sm m-0">{{ c.name }}</p>
          <p class="font-mono text-xs text-gray-400 m-0">{{ c.hex }}</p>
        </div>
      </div>
    </div>

    <!-- 间距 -->
    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4 pt-8 border-t border-gray-100">间距 Spacing</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead><tr class="bg-black/[0.02] border-b-2 border-black/[0.06]"><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">类名</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">值</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">用途</th></tr></thead>
        <tbody><tr v-for="s in spacingData" :key="s.name" class="border-b border-black/[0.04] hover:bg-black/[0.01]"><td class="px-4 py-3 font-mono text-xs text-vermilion">{{ s.name }}</td><td class="px-4 py-3 font-mono text-xs text-gray-600">{{ s.value }}</td><td class="px-4 py-3 text-gray-600">{{ s.usage }}</td></tr></tbody>
      </table>
    </div>

    <!-- 圆角 -->
    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4 pt-8 border-t border-gray-100">圆角 Radius</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead><tr class="bg-black/[0.02] border-b-2 border-black/[0.06]"><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">类名</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">值</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">用途</th></tr></thead>
        <tbody><tr v-for="r in radiusData" :key="r.name" class="border-b border-black/[0.04] hover:bg-black/[0.01]"><td class="px-4 py-3 font-mono text-xs text-vermilion">{{ r.name }}</td><td class="px-4 py-3 font-mono text-xs text-gray-600">{{ r.value }}</td><td class="px-4 py-3 text-gray-600">{{ r.usage }}</td></tr></tbody>
      </table>
    </div>

    <!-- 阴影 -->
    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4 pt-8 border-t border-gray-100">阴影 Shadows</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead><tr class="bg-black/[0.02] border-b-2 border-black/[0.06]"><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">类名</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">值</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">用途</th></tr></thead>
        <tbody><tr v-for="s in shadowData" :key="s.name" class="border-b border-black/[0.04] hover:bg-black/[0.01]"><td class="px-4 py-3 font-mono text-xs text-vermilion">{{ s.name }}</td><td class="px-4 py-3 font-mono text-[0.65rem] text-gray-600">{{ s.value }}</td><td class="px-4 py-3 text-gray-600">{{ s.usage }}</td></tr></tbody>
      </table>
    </div>

    <!-- 层级 -->
    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4 pt-8 border-t border-gray-100">层级 Z-Index</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead><tr class="bg-black/[0.02] border-b-2 border-black/[0.06]"><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">变量</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">值</th><th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">用途</th></tr></thead>
        <tbody><tr v-for="z in zIndexData" :key="z.name" class="border-b border-black/[0.04] hover:bg-black/[0.01]"><td class="px-4 py-3 font-mono text-xs text-vermilion">{{ z.name }}</td><td class="px-4 py-3 font-mono text-xs text-gray-600">{{ z.value }}</td><td class="px-4 py-3 text-gray-600">{{ z.usage }}</td></tr></tbody>
      </table>
    </div>
  </div>
</template>

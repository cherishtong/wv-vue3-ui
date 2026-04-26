<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvAccordion } from "@/wv-components";

const items = [
  { title: "何为无为设计？", content: "以中国传统哲学「无为」为精神内核，融合 2026 年设计趋势构建的 Vue 3 组件库。", value: "philosophy" },
  { title: "如何安装？", content: "通过 vp add 安装依赖后，按需引入组件即可使用。", value: "install" },
];

const installCode = `import { WvAccordion } from "@/wv-components";`;
const accordionCode = `<WvAccordion :items="items" />`;

const propsData = [
  { name: "items", type: "{ title, content, value, disabled? }[]", default: "[]", description: "折叠面板项" },
  { name: "type", type: "'single' | 'multiple'", default: "'single'", description: "展开模式" },
  { name: "collapsible", type: "boolean", default: "true", description: "是否可折叠（全部关闭）" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">折叠面板 Accordion</h1>
    <p class="text-gray-500 mb-10">使用 Radix Vue Accordion 基元。支持单个/多个展开。带动画过渡。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="accordionCode">
      <WvAccordion :items="items" class="w-full max-w-md" />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

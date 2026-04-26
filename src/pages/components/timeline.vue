<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvTimeline } from "@/wv-components";

const items = [
  { time: "2026-04-20", title: "项目立项", desc: "完成需求评审与技术方案设计" },
  { time: "2026-04-26", title: "首版发布", desc: "v0.1 正式上线", variant: "ink" as const },
];

const installCode = `import { WvTimeline } from "@/wv-components";`;
const timelineCode = `<WvTimeline :items="items" />`;

const propsData = [
  { name: "items", type: "{ time, title, desc?, variant? }[]", default: "[]", description: "时间轴项，variant 为 default 或 ink" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">时间轴 Timeline</h1>
    <p class="text-gray-500 mb-10">垂直时间轴组件。支持 default / ink 两种圆点颜色。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="timelineCode">
      <WvTimeline :items="items" class="w-full max-w-sm" />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

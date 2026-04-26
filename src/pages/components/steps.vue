<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvSteps } from "@/wv-components";

const items = [
  { label: "设计" },
  { label: "开发" },
  { label: "测试" },
  { label: "发布" },
];

const installCode = `import { WvSteps } from "@/wv-components";`;
const stepsCode = `<WvSteps :items="items" :current="1" />`;

const propsData = [
  { name: "items", type: "{ label, value? }[]", default: "[]", description: "步骤项" },
  { name: "current", type: "number", default: "0", description: "当前步骤索引（从 0 开始）" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">步骤条 Steps</h1>
    <p class="text-gray-500 mb-10">水平步骤指示器。自动判断 done / current / pending 状态。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="stepsCode">
      <WvSteps :items="items" :current="1" class="w-full max-w-xl" />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

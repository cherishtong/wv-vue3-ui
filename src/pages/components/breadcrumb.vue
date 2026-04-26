<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvBreadcrumb } from "@/wv-components";

const items = [
  { label: "首页", href: "#" },
  { label: "组件", href: "#" },
  { label: "面包屑", active: true },
];

const installCode = `import { WvBreadcrumb } from "@/wv-components";`;
const breadcrumbCode = `<WvBreadcrumb :items="items" separator=" / " />`;

const propsData = [
  { name: "items", type: "{ label, href?, active? }[]", default: "[]", description: "面包屑项，active 为当前项" },
  { name: "separator", type: "string", default: "/", description: "分隔符字符" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">面包屑 Breadcrumb</h1>
    <p class="text-gray-500 mb-10">路径导航组件。自动渲染分隔符。支持 active 状态。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="breadcrumbCode">
      <WvBreadcrumb :items="items" separator=" / " />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

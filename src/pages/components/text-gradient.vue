<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvTextGradient } from "@/wv-components";

const installCode = `import { WvTextGradient } from "@/wv-components";`;
const defaultCode = `<WvTextGradient>道常无为而无不为</WvTextGradient>`;
const headingCode = `<WvTextGradient tag="h1">道常无为而无不为</WvTextGradient>`;

const propsData = [
  { name: "tag", type: "string", default: "span", description: "渲染的 HTML 标签，如 h1 / h2 / p" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">文字流光 Text Gradient</h1>
    <p class="text-gray-500 mb-10">渐变动画文字效果。从墨色到朱砂再到墨色的流光循环。支持自定义标签。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="defaultCode">
      <WvTextGradient class="text-2xl font-bold">道常无为而无不为</WvTextGradient>
    </DocsPreview>

    <DocsPreview :code="headingCode">
      <WvTextGradient tag="h1" class="text-4xl font-serif font-bold">道常无为而无不为</WvTextGradient>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

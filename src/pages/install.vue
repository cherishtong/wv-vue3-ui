<script setup lang="ts">
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";

const installCmd = "npm install wv-vue3-ui";
const tailwindCss = "@import 'tailwindcss';\n@import 'wv-vue3-ui/style.css';";
const usageExample = "<script setup lang=\"ts\">\nimport { WvButton, WvCard, WvInput } from 'wv-vue3-ui'\n</" + "script>\n\n<template>\n  <WvButton variant=\"primary\">开始使用</WvButton>\n  <WvInput placeholder=\"请输入...\" />\n  <WvCard>\n    <p>卡片内容</p>\n  </WvCard>\n</template>";
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">快速开始</h1>
    <p class="text-gray-500 mb-8">安装 wv-vue3-ui 并开始构建你的应用。</p>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4 pt-8 border-t border-gray-100">安装组件库</h2>
    <DocsCodeBlock :code="installCmd" />
    <p class="text-sm text-gray-400 mt-2">或使用 pnpm / yarn / bun</p>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">配置 Tailwind CSS</h2>
    <p class="text-sm text-gray-500 mb-4">在你的全局 CSS 文件中导入 Tailwind 和 wv-vue3-ui 的样式：</p>
    <DocsCodeBlock :code="tailwindCss" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">使用组件</h2>
    <p class="text-sm text-gray-500 mb-4">直接导入你需要使用的组件：</p>
    <DocsCodeBlock :code="usageExample" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">浏览文档</h2>
    <p class="text-gray-500">
      查看左侧导航栏浏览全部 28 个组件的详细文档，包括变体示例、代码片段和 API 参考。
    </p>
  </div>
</template>

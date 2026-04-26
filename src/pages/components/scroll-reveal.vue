<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvScrollReveal } from "@/wv-components";

const installCode = `import { WvScrollReveal } from "@/wv-components";`;
const scrollCode = `<WvScrollReveal>
  <div class="p-6 bg-white rounded-xl shadow-md">渐现元素——无延迟</div>
</WvScrollReveal>

<WvScrollReveal :delay="0.3">
  <div class="p-6 bg-vermilion text-white rounded-xl shadow-md">渐现元素——0.3s 延迟</div>
</WvScrollReveal>`;

const propsData = [
  { name: "delay", type: "number", default: "0", description: "动画延迟（秒）" },
  { name: "threshold", type: "number", default: "0.1", description: "IntersectionObserver 阈值" },
  { name: "once", type: "boolean", default: "true", description: "是否只触发一次，false 则滚动往复触发" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">滚动揭示 Scroll Reveal</h1>
    <p class="text-gray-500 mb-10">IntersectionObserver 实现元素渐现。支持 delay 延迟。可配合 once 属性控制单次/重复触发。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="scrollCode">
      <div class="flex flex-col gap-4 w-full max-w-sm">
        <WvScrollReveal>
          <div class="p-6 bg-white rounded-xl shadow-depth-1">
            <div class="text-ink font-semibold text-sm">无延迟渐现</div>
            <div class="text-gray-400 text-xs mt-1">delay = 0</div>
          </div>
        </WvScrollReveal>
        <WvScrollReveal :delay="0.3">
          <div class="p-6 bg-vermilion text-white rounded-xl shadow-depth-1">
            <div class="font-semibold text-sm">延迟渐现</div>
            <div class="text-white/60 text-xs mt-1">delay = 0.3s</div>
          </div>
        </WvScrollReveal>
      </div>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

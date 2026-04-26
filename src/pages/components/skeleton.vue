<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvSkeleton } from "@/wv-components";

const installCode = `import { WvSkeleton } from "@/wv-components";`;
const skeletonCode = `<WvSkeleton class="h-4 w-full" />
<WvSkeleton class="h-4 w-3/4" />
<WvSkeleton class="h-4 w-1/2" />`;

const propsData = [
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名，可设宽高" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">骨架屏 Skeleton</h1>
    <p class="text-gray-500 mb-10">加载占位组件。animate-pulse 动画。可自定义宽高。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="skeletonCode">
      <div class="w-full max-w-sm flex flex-col gap-3">
        <WvSkeleton class="h-4 w-full" />
        <WvSkeleton class="h-4 w-3/4" />
        <WvSkeleton class="h-4 w-1/2" />
      </div>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

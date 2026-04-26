<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvBadge } from "@/wv-components";

const installCode = `import { WvBadge } from "@/wv-components";`;
const vermilionCode = `<WvBadge variant="vermilion">New</WvBadge>`;
const inkCode = `<WvBadge variant="ink">99+</WvBadge>`;
const dotCode = `<WvBadge variant="dot" />`;

const propsData = [
  { name: "variant", type: "vermilion | ink | dot", default: "vermilion", description: "徽标视觉变体 (dot 不显示文字)" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">徽标 Badge</h1>
    <p class="text-gray-500 mb-8">vermilion / ink / dot 三种变体。内联小标记，常用于状态提示与计数。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">变体 Variants</h2>
    <DocsPreview :code="vermilionCode">
      <WvBadge variant="vermilion">New</WvBadge>
    </DocsPreview>
    <DocsPreview :code="inkCode">
      <WvBadge variant="ink">99+</WvBadge>
    </DocsPreview>
    <DocsPreview :code="dotCode">
      <WvBadge variant="dot" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

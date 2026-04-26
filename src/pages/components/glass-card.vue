<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvGlassCard } from "@/wv-components";

const installCode = `import { WvGlassCard } from "@/wv-components";`;
const lightCode = `<WvGlassCard variant="light" class="p-8">Light Glass Card</WvGlassCard>`;
const darkCode = `<WvGlassCard variant="dark" class="p-8">Dark Glass Card</WvGlassCard>`;

const propsData = [
  { name: "variant", type: "light | dark", default: "light", description: "玻璃卡视觉变体" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">液态玻璃卡 Glass Card</h1>
    <p class="text-gray-500 mb-8">2026 年标志性美学——半透明背景 + backdrop-filter + 顶部高光线。light / dark 双变体。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Light</h2>
    <DocsPreview :code="lightCode">
      <WvGlassCard variant="light" class="p-8 text-center">Light Glass Card</WvGlassCard>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Dark</h2>
    <DocsPreview dark :code="darkCode">
      <WvGlassCard variant="dark" class="p-8 text-center">Dark Glass Card</WvGlassCard>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

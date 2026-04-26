<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvCard } from "@/wv-components";

const installCode = `import { WvCard } from "@/wv-components";`;
const defaultCode = `<WvCard variant="default" class="p-6">Default Card</WvCard>`;
const ruCode = `<WvCard variant="ru" class="p-6">Ru Card</WvCard>`;

const propsData = [
  { name: "variant", type: "default | ru", default: "default", description: "卡片视觉变体" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">卡片 Card</h1>
    <p class="text-gray-500 mb-8">变体 default (白底 + 阴影) / ru (墨色渐变)。hover 时浮起。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Default</h2>
    <DocsPreview :code="defaultCode">
      <WvCard variant="default" class="p-6">Default Card</WvCard>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Ru 墨色</h2>
    <DocsPreview :code="ruCode">
      <WvCard variant="ru" class="p-6">Ru Card</WvCard>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvAvatar } from "@/wv-components";

const installCode = `import { WvAvatar } from "@/wv-components";`;
const smCode = `<WvAvatar size="sm" fallback="S" />`;
const mdCode = `<WvAvatar size="md" fallback="M" />`;
const lgCode = `<WvAvatar size="lg" fallback="L" />`;
const xlCode = `<WvAvatar size="xl" fallback="X" />`;
const gradientCode = `<WvAvatar variant="gradient" size="lg" fallback="無" />`;
const fallbackCode = `<WvAvatar size="xl" variant="default" fallback="无" />`;

const propsData = [
  { name: "size", type: "sm | md | lg | xl", default: "md", description: "头像尺寸" },
  { name: "variant", type: "default | gradient", default: "default", description: "头像视觉变体" },
  { name: "src", type: "string", default: "—", description: "头像图片地址 (存在时覆盖 fallback)" },
  { name: "fallback", type: "string", default: "", description: "无图片时显示的备用文字" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">头像 Avatar</h1>
    <p class="text-gray-500 mb-8">sm / md / lg / xl 四种尺寸 · default / gradient 两种变体 · 支持图片 src 和文字 fallback。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">尺寸 Sizes</h2>
    <DocsPreview :code="smCode">
      <WvAvatar size="sm" fallback="S" />
    </DocsPreview>
    <DocsPreview :code="mdCode">
      <WvAvatar size="md" fallback="M" />
    </DocsPreview>
    <DocsPreview :code="lgCode">
      <WvAvatar size="lg" fallback="L" />
    </DocsPreview>
    <DocsPreview :code="xlCode">
      <WvAvatar size="xl" fallback="X" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Gradient 渐变变体</h2>
    <DocsPreview :code="gradientCode">
      <WvAvatar variant="gradient" size="lg" fallback="無" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">文字 Fallback</h2>
    <DocsPreview :code="fallbackCode">
      <WvAvatar size="xl" variant="default" fallback="无" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

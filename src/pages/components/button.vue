<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvButton } from "@/wv-components";

const installCode = `import { WvButton } from "@/wv-components";`;
const primaryCode = `<WvButton variant="primary">Primary</WvButton>`;
const ghostCode = `<WvButton variant="ghost">Ghost</WvButton>`;
const vermilionCode = `<WvButton variant="vermilion">Vermilion</WvButton>`;
const gradientCode = `<WvButton variant="gradient">Gradient</WvButton>`;
const textGradientCode = `<WvButton variant="text-gradient">Text Gradient</WvButton>`;
const smCode = `<WvButton size="sm">Small</WvButton>`;
const defaultCode = `<WvButton size="default">Default</WvButton>`;
const lgCode = `<WvButton size="lg">Large</WvButton>`;
const pillCode = `<WvButton pill variant="vermilion">Pill Button</WvButton>`;
const disabledCode = `<WvButton disabled>Disabled</WvButton>`;

const propsData = [
  { name: "variant", type: "primary | ghost | vermilion | gradient | text-gradient", default: "primary", description: "按钮视觉变体" },
  { name: "size", type: "sm | default | lg", default: "default", description: "按钮尺寸" },
  { name: "pill", type: "boolean", default: "false", description: "是否渲染为药丸形状 (rounded-full)" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用按钮" },
  { name: "as", type: "string", default: "button", description: "渲染的 HTML 标签" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">按钮 Button</h1>
    <p class="text-gray-500 mb-8">6 种变体 · 3 种尺寸 · 支持 Pill 与 Disabled 状态。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">变体 Variants</h2>
    <DocsPreview :code="primaryCode">
      <WvButton variant="primary">Primary</WvButton>
    </DocsPreview>
    <DocsPreview :code="ghostCode">
      <WvButton variant="ghost">Ghost</WvButton>
    </DocsPreview>
    <DocsPreview :code="vermilionCode">
      <WvButton variant="vermilion">Vermilion</WvButton>
    </DocsPreview>
    <DocsPreview :code="gradientCode">
      <WvButton variant="gradient">Gradient</WvButton>
    </DocsPreview>
    <DocsPreview :code="textGradientCode">
      <WvButton variant="text-gradient">Text Gradient</WvButton>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">尺寸 Sizes</h2>
    <DocsPreview :code="smCode">
      <WvButton size="sm">Small</WvButton>
    </DocsPreview>
    <DocsPreview :code="defaultCode">
      <WvButton size="default">Default</WvButton>
    </DocsPreview>
    <DocsPreview :code="lgCode">
      <WvButton size="lg">Large</WvButton>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Pill 药丸形状</h2>
    <DocsPreview :code="pillCode">
      <WvButton pill variant="vermilion">Pill Button</WvButton>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">禁用 Disabled</h2>
    <DocsPreview :code="disabledCode">
      <WvButton disabled>Disabled</WvButton>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

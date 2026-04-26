<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvTag } from "@/wv-components";
import { ref } from "vue";

const tags = [true, true, true];

const installCode = `import { WvTag } from "@/wv-components";`;
const defaultCode = `<WvTag variant="default">Default</WvTag>`;
const vermilionCode = `<WvTag variant="vermilion">Vermilion</WvTag>`;
const inkCode = `<WvTag variant="ink">Ink</WvTag>`;
const dismissibleCode = `<WvTag dismissible @dismiss="onDismiss">Dismissible</WvTag>`;

const propsData = [
  { name: "variant", type: "default | vermilion | ink", default: "default", description: "标签视觉变体" },
  { name: "dismissible", type: "boolean", default: "false", description: "是否显示关闭按钮 (触发 dismiss 事件)" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">标签 Tag</h1>
    <p class="text-gray-500 mb-8">default / vermilion / ink 变体。支持 dismissible 可关闭。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">变体 Variants</h2>
    <DocsPreview :code="defaultCode">
      <WvTag variant="default">Default</WvTag>
    </DocsPreview>
    <DocsPreview :code="vermilionCode">
      <WvTag variant="vermilion">Vermilion</WvTag>
    </DocsPreview>
    <DocsPreview :code="inkCode">
      <WvTag variant="ink">Ink</WvTag>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">可关闭 Dismissible</h2>
    <DocsPreview :code="dismissibleCode">
      <WvTag v-if="tags[0]" dismissible variant="vermilion" @dismiss="tags[0] = false">Click × to dismiss</WvTag>
      <span v-else class="text-sm text-gray-400">(已关闭)</span>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

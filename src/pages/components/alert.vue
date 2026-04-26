<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvAlert } from "@/wv-components";
import { ref } from "vue";

const showAlert = ref(true);

const installCode = `import { WvAlert } from "@/wv-components";`;
const infoCode = `<WvAlert variant="info">这是一条信息提示。</WvAlert>`;
const successCode = `<WvAlert variant="success">操作已成功完成。</WvAlert>`;
const warningCode = `<WvAlert variant="warning">请注意此操作。</WvAlert>`;
const errorCode = `<WvAlert variant="error">发生了一个错误。</WvAlert>`;
const titleCode = `<WvAlert variant="warning" title="注意">操作前请确认信息无误。</WvAlert>`;
const dismissibleCode = `<WvAlert variant="info" dismissible @dismiss="onDismiss">可关闭的提示。</WvAlert>`;

const propsData = [
  { name: "variant", type: "info | success | warning | error", default: "info", description: "提示语义变体" },
  { name: "title", type: "string", default: "—", description: "提示标题 (渲染为粗体段落)" },
  { name: "dismissible", type: "boolean", default: "false", description: "是否显示关闭按钮" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">提示 Alert</h1>
    <p class="text-gray-500 mb-8">info / success / warning / error 四种语义。支持 title 和 dismissible。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">变体 Variants</h2>
    <DocsPreview :code="infoCode">
      <WvAlert variant="info">这是一条信息提示。</WvAlert>
    </DocsPreview>
    <DocsPreview :code="successCode">
      <WvAlert variant="success">操作已成功完成。</WvAlert>
    </DocsPreview>
    <DocsPreview :code="warningCode">
      <WvAlert variant="warning">请注意此操作。</WvAlert>
    </DocsPreview>
    <DocsPreview :code="errorCode">
      <WvAlert variant="error">发生了一个错误。</WvAlert>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">带标题 With Title</h2>
    <DocsPreview :code="titleCode">
      <WvAlert variant="warning" title="注意">操作前请确认信息无误。</WvAlert>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">可关闭 Dismissible</h2>
    <DocsPreview :code="dismissibleCode">
      <WvAlert v-if="showAlert" variant="info" dismissible @dismiss="showAlert = false">点击右侧 × 关闭此提示。</WvAlert>
      <span v-else class="text-sm text-gray-400">(已关闭)</span>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

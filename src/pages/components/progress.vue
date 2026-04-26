<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvProgress } from "@/wv-components";
import { ref } from "vue";

const progress = ref(65);

const installCode = `import { WvProgress } from "@/wv-components";`;
const default30Code = `<WvProgress :modelValue="30" />`;
const default65Code = `<WvProgress :modelValue="65" />`;
const default100Code = `<WvProgress :modelValue="100" />`;
const vermilionCode = `<WvProgress variant="vermilion" :modelValue="50" />`;
const gradientCode = `<WvProgress variant="gradient" :modelValue="75" />`;
const vmodelCode = `<WvProgress v-model="value" />`;

const propsData = [
  { name: "modelValue", type: "number", default: "0", description: "当前进度值 (v-model 双向绑定)" },
  { name: "max", type: "number", default: "100", description: "进度最大值" },
  { name: "variant", type: "default | vermilion | gradient", default: "default", description: "进度条颜色变体" },
  { name: "class", type: "string", default: "—", description: "额外的 CSS 类名 (外层轨道)" },
  { name: "barClass", type: "string", default: "—", description: "额外的 CSS 类名 (内层进度条)" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">进度条 Progress</h1>
    <p class="text-gray-500 mb-8">default / vermilion / gradient 三种颜色变体。支持 v-model 双向绑定。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">默认 Default</h2>
    <DocsPreview :code="default30Code">
      <WvProgress :modelValue="30" class="w-64" />
    </DocsPreview>
    <DocsPreview :code="default65Code">
      <WvProgress :modelValue="65" class="w-64" />
    </DocsPreview>
    <DocsPreview :code="default100Code">
      <WvProgress :modelValue="100" class="w-64" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">变体 Variants</h2>
    <DocsPreview :code="vermilionCode">
      <WvProgress variant="vermilion" :modelValue="50" class="w-64" />
    </DocsPreview>
    <DocsPreview :code="gradientCode">
      <WvProgress variant="gradient" :modelValue="75" class="w-64" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">v-model 双向绑定</h2>
    <DocsPreview :code="vmodelCode">
      <div class="flex flex-col items-center gap-3">
        <WvProgress v-model="progress" class="w-64" />
        <span class="text-sm text-gray-500">{{ progress }}%</span>
      </div>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

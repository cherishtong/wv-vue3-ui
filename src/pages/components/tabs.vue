<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvTabs } from "@/wv-components";
import { ref } from "vue";

const current = ref("intro");

const tabsItems = [
  { label: "介绍", value: "intro" },
  { label: "用法", value: "usage" },
  { label: "禁用", value: "disabled", disabled: true },
];

const installCode = `import { WvTabs } from "@/wv-components";`;
const tabsCode = `<WvTabs v-model="current" :items="tabsItems">
  <template #intro>
    <p>介绍面板内容——使用具名插槽对应 value。</p>
  </template>
  <template #usage>
    <p>用法面板内容——支持 v-model 双向绑定。</p>
  </template>
</WvTabs>`;

const propsData = [
  { name: "items", type: "{ label, value, disabled? }[]", default: "[]", description: "标签项数组，value 对应具名插槽" },
  { name: "modelValue", type: "string", default: "''", description: "当前选中标签的 value" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">标签页 Tabs</h1>
    <p class="text-gray-500 mb-10">使用 Radix Vue Tabs 基元。底部边框指示器。支持 v-model 和命名插槽。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="tabsCode">
      <WvTabs v-model="current" :items="tabsItems" class="w-full max-w-md">
        <template #intro>
          <p class="text-sm text-gray-600">介绍面板内容——使用具名插槽对应 value。</p>
        </template>
        <template #usage>
          <p class="text-sm text-gray-600">用法面板内容——支持 v-model 双向绑定。</p>
        </template>
      </WvTabs>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

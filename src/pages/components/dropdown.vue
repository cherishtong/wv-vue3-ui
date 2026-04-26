<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvDropdown } from "@/wv-components";

const items = [
  { label: "个人资料", active: true },
  { label: "设置" },
  { label: "分割线", divider: true },
  { label: "禁用项", disabled: true },
  { label: "退出登录" },
];

const installCode = `import { WvDropdown } from "@/wv-components";`;
const dropdownCode = `<WvDropdown :items="items" triggerLabel="打开菜单" />`;

const propsData = [
  { name: "items", type: "{ label, action?, divider?, active?, disabled? }[]", default: "[]", description: "菜单项，divider 为分割线" },
  { name: "triggerLabel", type: "string", default: "菜单", description: "触发按钮文本" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">下拉菜单 Dropdown</h1>
    <p class="text-gray-500 mb-10">使用 Radix Vue DropdownMenu 基元。支持分割线、激活项、禁用项。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="dropdownCode">
      <WvDropdown :items="items" triggerLabel="打开菜单" />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

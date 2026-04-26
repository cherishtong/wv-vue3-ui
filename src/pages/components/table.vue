<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvTable, WvBadge } from "@/wv-components";

const columns = [
  { key: "name", label: "名称" },
  { key: "role", label: "角色" },
  { key: "status", label: "状态", class: "text-center" },
];

const data = [
  { name: "张三", role: "前端工程师", status: "online" },
  { name: "李四", role: "设计师", status: "offline" },
  { name: "王五", role: "后端工程师", status: "online" },
];

const installCode = `import { WvTable } from "@/wv-components";`;
const tableCode = `<WvTable :columns="columns" :data="data">
  <template #cell-status="{ value }">
    <WvBadge :variant="value === 'online' ? 'vermilion' : 'ghost'">
      {{ value === 'online' ? '在线' : '离线' }}
    </WvBadge>
  </template>
</WvTable>`;

const propsData = [
  { name: "columns", type: "{ key, label, class? }[]", default: "[]", description: "列定义，key 对应数据字段" },
  { name: "data", type: "Record[]", default: "[]", description: "表格数据，空数组显示空状态" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">表格 Table</h1>
    <p class="text-gray-500 mb-10">响应式数据表格。支持具名插槽自定义单元格。空状态展示。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="tableCode">
      <WvTable :columns="columns" :data="data" class="w-full max-w-lg">
        <template #cell-status="{ value }">
          <WvBadge :variant="value === 'online' ? 'vermilion' : 'ghost'">
            {{ value === 'online' ? '在线' : '离线' }}
          </WvBadge>
        </template>
      </WvTable>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

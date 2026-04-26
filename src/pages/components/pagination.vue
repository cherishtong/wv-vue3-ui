<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvPagination } from "@/wv-components";
import { ref } from "vue";

const page = ref(1);

const installCode = `import { WvPagination } from "@/wv-components";`;
const paginationCode = `<WvPagination v-model="page" :total="8" :sibling-count="1" />`;

const propsData = [
  { name: "modelValue", type: "number", default: "1", description: "当前页码，支持 v-model" },
  { name: "total", type: "number", default: "1", description: "总页数" },
  { name: "siblingCount", type: "number", default: "1", description: "当前页两侧显示的页数" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">分页 Pagination</h1>
    <p class="text-gray-500 mb-10">带省略号的分页器。当前页高亮。上一页/下一页按钮。支持 v-model。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="paginationCode">
      <WvPagination v-model="page" :total="8" :sibling-count="1" />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvEmpty, WvButton } from "@/wv-components";
import { FileText } from "lucide-vue-next";

const installCode = `import { WvEmpty } from "@/wv-components";`;
const emptyActionCode = `<WvEmpty>
  <template #action>
    <WvButton variant="primary">新增数据</WvButton>
  </template>
</WvEmpty>`;
const emptyIconCode = `<WvEmpty :icon="FileText" text="没有找到相关文档" />`;

const propsData = [
  { name: "icon", type: "Component", default: "Inbox", description: "自定义图标组件，默认 inbox 图标" },
  { name: "text", type: "string", default: "暂无数据", description: "提示文字" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">空状态 Empty</h1>
    <p class="text-gray-500 mb-10">缺省占位组件。默认 inbox 图标。支持 action 插槽放置操作按钮。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="emptyActionCode">
      <WvEmpty>
        <template #action>
          <WvButton variant="primary">新增数据</WvButton>
        </template>
      </WvEmpty>
    </DocsPreview>

    <DocsPreview :code="emptyIconCode">
      <WvEmpty :icon="FileText" text="没有找到相关文档" />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvReasoning } from "@/wv-components";
import { ref } from "vue";

const expanded = ref(true);

const installCode = `import { WvReasoning } from "@/wv-components";`;
const reasoningCode = `<script setup lang="ts">
import { WvReasoning } from "@/wv-components";
import { ref } from "vue";

const expanded = ref(true);
<\/script>

<template>
  <WvReasoning
    :expanded="expanded"
    steps="首先检索相关知识库……然后分析语义关联……最后提炼答案。"
    @update:expanded="expanded = $event"
  />
</template>`;

const propsData = [
  { name: "steps", type: "string", default: "", description: "推理步骤文本内容" },
  { name: "expanded", type: "boolean", default: "true", description: "是否展开推理步骤" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">推理路径 Reasoning</h1>
    <p class="text-gray-500 mb-10">展示 AI 推理步骤。可展开/折叠。左侧朱砂色竖线标记。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="reasoningCode" dark>
      <WvReasoning
        class="w-full max-w-lg"
        :expanded="expanded"
        steps="首先检索相关知识库……然后分析语义关联……最后提炼答案。"
        @update:expanded="expanded = $event"
      />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

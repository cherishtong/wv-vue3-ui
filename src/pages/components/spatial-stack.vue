<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvSpatialStack } from "@/wv-components";

const installCode = `import { WvSpatialStack } from "@/wv-components";`;
const spatialCode = `<WvSpatialStack />`;
const customCode = `<WvSpatialStack
  :layers="[
    { char: '光', text: '光为万象' },
    { char: '影', text: '影随光生' },
    { char: '形', text: '形影不离' },
  ]"
/>`;

const propsData = [
  {
    name: "layers",
    type: "{ char: string, text: string }[]",
    default: `[{char:"墨",text:"墨色为骨"},{char:"朱",text:"朱砂为血"},{char:"纸",text:"纸张为肤"}]`,
    description: "三层卡片内容数组，每层含字符和说明文字",
  },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">空间堆叠 Spatial Stack</h1>
    <p class="text-gray-500 mb-10">3 层卡片堆叠，hover 展开效果。受 Apple Vision Pro 空间设计启发。每层可自定义文字。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">默认示例</h2>
    <DocsPreview :code="spatialCode">
      <WvSpatialStack />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">自定义层</h2>
    <DocsPreview :code="customCode">
      <WvSpatialStack
        :layers="[
          { char: '光', text: '光为万象' },
          { char: '影', text: '影随光生' },
          { char: '形', text: '形影不离' },
        ]"
      />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvDepthLayer } from "@/wv-components";

const installCode = `import { WvDepthLayer } from "@/wv-components";`;

const depthLabels = [
  { depth: 1 as const, label: "轻微浮起" },
  { depth: 2 as const, label: "卡片悬浮" },
  { depth: 3 as const, label: "弹层层级" },
  { depth: 4 as const, label: "模态层级" },
];

const depthCode = `<div class="flex gap-4">
  <WvDepthLayer :depth="1" class="p-6"><span>轻微浮起</span></WvDepthLayer>
  <WvDepthLayer :depth="2" class="p-6"><span>卡片悬浮</span></WvDepthLayer>
  <WvDepthLayer :depth="3" class="p-6"><span>弹层层级</span></WvDepthLayer>
  <WvDepthLayer :depth="4" class="p-6"><span>模态层级</span></WvDepthLayer>
</div>`;

const propsData = [
  { name: "depth", type: "1 | 2 | 3 | 4", default: "2", description: "景深层级，值越大阴影越深" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">景深 Depth Layer</h1>
    <p class="text-gray-500 mb-10">四级景深阴影系统。1=轻微浮起 2=卡片悬浮 3=弹层层级 4=模态层级。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">四级景深</h2>
    <DocsPreview :code="depthCode">
      <div class="flex gap-4 flex-wrap">
        <WvDepthLayer v-for="item in depthLabels" :key="item.depth" :depth="item.depth" class="p-6">
          <div class="text-ink font-semibold text-sm mb-1">Depth {{ item.depth }}</div>
          <div class="text-gray-400 text-xs">{{ item.label }}</div>
        </WvDepthLayer>
      </div>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

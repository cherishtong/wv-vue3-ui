<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvStatusPulse } from "@/wv-components";

const installCode = `import { WvStatusPulse } from "@/wv-components";`;

const statuses = [
  { status: "online" as const, label: "在线" },
  { status: "busy" as const, label: "忙碌" },
  { status: "offline" as const, label: "离线" },
];

const statusCode = `<div class="flex gap-6">
  <WvStatusPulse status="online" label="在线" />
  <WvStatusPulse status="busy" label="忙碌" />
  <WvStatusPulse status="offline" label="离线" />
</div>`;

const propsData = [
  { name: "status", type: "online | offline | busy", default: "online", description: "在线状态类型" },
  { name: "label", type: "string", default: "", description: "状态文字标签" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">状态脉冲 Status Pulse</h1>
    <p class="text-gray-500 mb-10">在线状态指示器。online (绿·脉冲) / busy (橙·脉冲) / offline (灰·静态)。支持文字标签。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">三种状态</h2>
    <DocsPreview :code="statusCode">
      <div class="flex gap-6">
        <WvStatusPulse v-for="s in statuses" :key="s.status" :status="s.status" :label="s.label" />
      </div>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

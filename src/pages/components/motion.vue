<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvMotion } from "@/wv-components";

const installCode = `import { WvMotion } from "@/wv-components";`;

const motionTypes = [
  { type: "breathe" as const, label: "呼吸 breathe" },
  { type: "float" as const, label: "悬浮 float" },
  { type: "shimmer" as const, label: "流光 shimmer" },
  { type: "ripple" as const, label: "涟漪 ripple" },
  { type: "rotate" as const, label: "旋转 rotate" },
  { type: "pulse" as const, label: "脉冲 pulse" },
];

const motionCode = `<div class="flex flex-wrap gap-8 justify-center">
  <div class="flex flex-col items-center gap-2"><WvMotion type="breathe" /><span class="text-xs text-white/60">breathe</span></div>
  <div class="flex flex-col items-center gap-2"><WvMotion type="float" /><span class="text-xs text-white/60">float</span></div>
  <div class="flex flex-col items-center gap-2"><WvMotion type="shimmer" /><span class="text-xs text-white/60">shimmer</span></div>
  <div class="flex flex-col items-center gap-2"><WvMotion type="ripple" /><span class="text-xs text-white/60">ripple</span></div>
  <div class="flex flex-col items-center gap-2"><WvMotion type="rotate" /><span class="text-xs text-white/60">rotate</span></div>
  <div class="flex flex-col items-center gap-2"><WvMotion type="pulse" /><span class="text-xs text-white/60">pulse</span></div>
</div>`;

const propsData = [
  {
    name: "type",
    type: "breathe | float | shimmer | ripple | rotate | pulse",
    default: "breathe",
    description: "动效类型",
  },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">动效预设 Motion</h1>
    <p class="text-gray-500 mb-10">六大功能性微动效：breathe (呼吸) / float (悬浮) / shimmer (流光) / ripple (涟漪) / rotate (旋转) / pulse (脉冲)。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">六大动效</h2>
    <DocsPreview :code="motionCode" dark>
      <div class="flex flex-wrap gap-8 justify-center">
        <div v-for="item in motionTypes" :key="item.type" class="flex flex-col items-center gap-2">
          <WvMotion :type="item.type" />
          <span class="text-xs text-white/60 font-mono">{{ item.label }}</span>
        </div>
      </div>
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>

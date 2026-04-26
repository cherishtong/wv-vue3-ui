<script setup lang="ts">
import { cn } from "@/lib/utils";

interface SpatialLayer {
  char: string;
  text: string;
}

interface Props {
  layers?: SpatialLayer[];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  layers: () => [
    { char: "墨", text: "墨色为骨" },
    { char: "朱", text: "朱砂为血" },
    { char: "纸", text: "纸张为肤" },
  ],
});

const baseStyles = [
  "bg-gradient-to-br from-ink to-gray-800 text-white",
  "bg-gradient-to-br from-vermilion to-red-900 text-white",
  "bg-white text-ink border border-gray-200",
];
</script>

<template>
  <div :class="cn('relative w-60 h-[300px] group cursor-default', props.class)">
    <div
      v-for="(layer, idx) in layers"
      :key="idx"
      :class="
        cn(
          'spatial-layer absolute w-full h-full rounded-[1.25rem] flex flex-col items-center justify-center p-6 text-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]',
          baseStyles[idx] || baseStyles[0]
        )
      "
      :style="{
        zIndex: layers.length - idx,
      }"
    >
      <div class="font-serif text-4xl font-black mb-3">{{ layer.char }}</div>
      <div class="text-sm opacity-80">{{ layer.text }}</div>
    </div>
  </div>
</template>

<style scoped>
.spatial-layer:nth-child(1) {
  transform: rotate(-4deg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
.spatial-layer:nth-child(2) {
  transform: translate(14px, 14px) rotate(2deg);
  box-shadow: 0 8px 32px rgba(185, 28, 28, 0.25);
}
.spatial-layer:nth-child(3) {
  transform: translate(28px, 28px) rotate(6deg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.group:hover .spatial-layer:nth-child(1) {
  transform: translate(-16px, -8px) rotate(-6deg) scale(1.02);
}
.group:hover .spatial-layer:nth-child(2) {
  transform: translate(0, 0) rotate(0deg) scale(1.02);
}
.group:hover .spatial-layer:nth-child(3) {
  transform: translate(16px, 8px) rotate(6deg) scale(1.02);
}
</style>

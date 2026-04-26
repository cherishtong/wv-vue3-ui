<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-vue-next";

interface Props {
  steps?: string;
  expanded?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  steps: "",
  expanded: true,
});

const emit = defineEmits<{
  "update:expanded": [value: boolean];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'py-3 px-4 bg-white/[0.03] border-l-2 border-vermilion rounded-r-lg text-xs text-white/50 leading-relaxed',
        props.class
      )
    "
  >
    <div
      class="flex items-center gap-2 font-semibold text-vermilion mb-1.5 text-[0.65rem] uppercase tracking-[0.1em] cursor-pointer select-none"
      @click="emit('update:expanded', !expanded)"
    >
      <Lightbulb class="w-3 h-3" />
      AI 推理路径
    </div>
    <div v-if="expanded">
      {{ steps }}
    </div>
  </div>
</template>

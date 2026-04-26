<script setup lang="ts">
import { cn } from "@/lib/utils";

interface TimelineItem {
  time: string;
  title: string;
  desc?: string;
  variant?: "default" | "ink";
}

interface Props {
  items?: TimelineItem[];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});
</script>

<template>
  <div :class="cn('relative pl-8', props.class)">
    <div class="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200" />
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="relative pb-6 last:pb-0"
    >
      <div
        :class="
          cn(
            'absolute left-[-29px] top-1 w-3 h-3 rounded-full border-2 bg-white',
            item.variant === 'ink'
              ? 'border-ink'
              : 'border-vermilion'
          )
        "
      />
      <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
        {{ item.time }}
      </div>
      <div class="font-serif font-bold text-ink mb-1">{{ item.title }}</div>
      <p v-if="item.desc" class="text-sm text-gray-500 m-0">
        {{ item.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface StepItem {
  label: string;
  value?: string;
}

interface Props {
  items?: StepItem[];
  current?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  current: 0,
});

const stepStatus = (idx: number) => {
  if (idx < props.current) return "done";
  if (idx === props.current) return "current";
  return "pending";
};
</script>

<template>
  <div :class="cn('flex items-center w-full', props.class)">
    <template v-for="(item, idx) in items" :key="idx">
      <div class="flex items-center gap-2 flex-shrink-0">
        <div
          :class="
            cn(
              'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
              stepStatus(idx) === 'done' && 'bg-vermilion text-white',
              stepStatus(idx) === 'current' &&
                'border-2 border-vermilion text-vermilion bg-white',
              stepStatus(idx) === 'pending' &&
                'border-2 border-gray-200 text-gray-400 bg-white'
            )
          "
        >
          <span v-if="stepStatus(idx) === 'done'">&#10003;</span>
          <span v-else>{{ idx + 1 }}</span>
        </div>
        <span
          :class="
            cn(
              'text-xs font-medium whitespace-nowrap',
              stepStatus(idx) === 'done' && 'text-vermilion',
              stepStatus(idx) === 'current' && 'text-ink font-semibold',
              stepStatus(idx) === 'pending' && 'text-gray-400'
            )
          "
        >
          {{ item.label }}
        </span>
      </div>
      <div
        v-if="idx < items.length - 1"
        :class="
          cn(
            'flex-1 h-0.5 mx-3 rounded',
            idx < current ? 'bg-vermilion' : 'bg-gray-200'
          )
        "
      />
    </template>
  </div>
</template>

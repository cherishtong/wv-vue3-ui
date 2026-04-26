<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  modelValue?: number;
  total?: number;
  siblingCount?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 1,
  total: 1,
  siblingCount: 1,
});

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const pages = computed(() => {
  const current = props.modelValue;
  const total = props.total;
  const sibling = props.siblingCount;
  const result: (number | "...")[] = [];

  const rangeStart = Math.max(2, current - sibling);
  const rangeEnd = Math.min(total - 1, current + sibling);

  result.push(1);
  if (rangeStart > 2) result.push("...");
  for (let i = rangeStart; i <= rangeEnd; i++) result.push(i);
  if (rangeEnd < total - 1) result.push("...");
  if (total > 1) result.push(total);

  return result;
});

const goTo = (page: number) => {
  if (page >= 1 && page <= props.total) {
    emit("update:modelValue", page);
  }
};
</script>

<template>
  <nav :class="cn('flex items-center gap-1', props.class)" aria-label="Pagination">
    <button
      class="w-9 h-9 flex items-center justify-center rounded text-sm border border-gray-200 disabled:opacity-30 hover:border-vermilion hover:text-vermilion transition-colors cursor-pointer"
      :disabled="modelValue <= 1"
      @click="goTo(modelValue - 1)"
    >
      &lsaquo;
    </button>

    <template v-for="(page, idx) in pages" :key="idx">
      <button
        v-if="page === '...'"
        class="w-9 h-9 flex items-center justify-center rounded text-sm text-gray-400"
        disabled
      >
        ...
      </button>
      <button
        v-else
        :class="
          cn(
            'w-9 h-9 flex items-center justify-center rounded text-sm border transition-colors cursor-pointer',
            page === modelValue
              ? 'bg-ink text-white border-ink'
              : 'border-gray-200 text-gray-600 hover:border-vermilion hover:text-vermilion'
          )
        "
        @click="goTo(page)"
      >
        {{ page }}
      </button>
    </template>

    <button
      class="w-9 h-9 flex items-center justify-center rounded text-sm border border-gray-200 disabled:opacity-30 hover:border-vermilion hover:text-vermilion transition-colors cursor-pointer"
      :disabled="modelValue >= total"
      @click="goTo(modelValue + 1)"
    >
      &rsaquo;
    </button>
  </nav>
</template>

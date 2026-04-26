<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvProgressBarVariants = cva(
  "h-full rounded-full transition-all duration-500 ease-out",
  {
    variants: {
      variant: {
        default: "bg-ink",
        vermilion: "bg-vermilion",
        gradient: "bg-gradient-to-r from-vermilion via-red-500 to-vermilion",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props {
  modelValue?: number;
  max?: number;
  variant?: VariantProps<typeof wvProgressBarVariants>["variant"];
  class?: string;
  barClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  max: 100,
  variant: "default",
});

const percentage = computed(() =>
  Math.min(100, Math.max(0, (props.modelValue / props.max) * 100))
);

const barClasses = computed(() =>
  cn(wvProgressBarVariants({ variant: props.variant }), props.barClass)
);
</script>

<template>
  <div
    :class="cn('w-full h-2 bg-gray-200 rounded-full overflow-hidden', props.class)"
    role="progressbar"
    :aria-valuenow="modelValue"
    :aria-valuemin="0"
    :aria-valuemax="max"
  >
    <div :class="barClasses" :style="{ width: percentage + '%' }" />
  </div>
</template>

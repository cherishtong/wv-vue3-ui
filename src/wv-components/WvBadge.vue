<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvBadgeVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      vermilion:
        "bg-vermilion text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded leading-none",
      ink: "bg-ink text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded leading-none",
      dot: "w-2 h-2 bg-vermilion rounded-full p-0",
    },
  },
  defaultVariants: {
    variant: "vermilion",
  },
});

interface Props {
  variant?: VariantProps<typeof wvBadgeVariants>["variant"];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "vermilion",
});

const classes = computed(() =>
  cn(wvBadgeVariants({ variant: props.variant }), props.class)
);
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>

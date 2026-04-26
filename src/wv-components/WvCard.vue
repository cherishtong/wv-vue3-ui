<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvCardVariants = cva("rounded-lg transition-all duration-300", {
  variants: {
    variant: {
      default:
        "bg-white border border-gray-100 shadow-sm hover:shadow-depth-2 hover:-translate-y-1",
      ru: "bg-gradient-to-br from-ink via-gray-800 to-vermilion text-white shadow-lg hover:shadow-xl hover:-translate-y-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props {
  variant?: VariantProps<typeof wvCardVariants>["variant"];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const classes = computed(() =>
  cn(wvCardVariants({ variant: props.variant }), props.class)
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

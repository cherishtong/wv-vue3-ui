<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvAvatarVariants = cva(
  "inline-flex items-center justify-center font-serif font-bold rounded-full select-none",
  {
    variants: {
      size: {
        sm: "w-7 h-7 text-xs",
        md: "w-9 h-9 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg",
      },
      variant: {
        default: "bg-gray-200 text-gray-600",
        gradient:
          "bg-gradient-to-br from-vermilion to-red-900 text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

interface Props {
  size?: VariantProps<typeof wvAvatarVariants>["size"];
  variant?: VariantProps<typeof wvAvatarVariants>["variant"];
  src?: string;
  fallback?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "default",
  fallback: "",
});

const classes = computed(() =>
  cn(wvAvatarVariants({ size: props.size, variant: props.variant }), props.class)
);
</script>

<template>
  <div :class="classes">
    <img
      v-if="src"
      :src="src"
      class="w-full h-full rounded-full object-cover"
      :alt="fallback"
    />
    <span v-else>{{ fallback }}</span>
  </div>
</template>

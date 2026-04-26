<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvGlassCardVariants = cva(
  "relative overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
  {
    variants: {
      variant: {
        light:
          "bg-white/60 backdrop-blur-[16px] backdrop-saturate-[1.2] border border-white/50 shadow-depth-1 shadow-depth-2 shadow-inner-top hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-depth-3",
        dark: "bg-dark-matrix/75 backdrop-blur-[16px] backdrop-saturate-[1.2] border border-white/[0.08] text-white shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.25),0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-1.5 hover:scale-[1.01]",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

const highlightLineClasses: Record<string, string> = {
  light:
    "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent",
  dark: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent",
};

interface Props {
  variant?: VariantProps<typeof wvGlassCardVariants>["variant"];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "light",
});

const classes = computed(() =>
  cn(wvGlassCardVariants({ variant: props.variant }), props.class)
);
</script>

<template>
  <div :class="classes">
    <span :class="highlightLineClasses[variant]" />
    <slot />
  </div>
</template>

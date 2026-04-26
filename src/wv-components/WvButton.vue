<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 rounded-md cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-ink text-white hover:bg-vermilion",
        ghost: "bg-transparent text-ink border border-gray-300 hover:border-ink hover:bg-ink/5",
        vermilion: "bg-vermilion text-white hover:bg-red-800",
        gradient: "bg-gradient-to-br from-ink to-vermilion text-white hover:from-vermilion hover:to-red-800",
        "text-gradient": [
          "bg-transparent text-transparent bg-clip-text",
          "bg-gradient-to-r from-ink via-vermilion to-ink bg-[length:200%_auto]",
          "animate-shine",
          "tracking-[0.15em]",
        ],
      },
      size: {
        sm: "py-1.5 px-4 text-[0.65rem]",
        default: "py-3 px-8",
        lg: "py-4 px-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface Props {
  variant?: VariantProps<typeof wvButtonVariants>["variant"];
  size?: VariantProps<typeof wvButtonVariants>["size"];
  pill?: boolean;
  disabled?: boolean;
  as?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "default",
  pill: false,
  disabled: false,
  as: "button",
});

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    wvButtonVariants({ variant: props.variant, size: props.size }),
    props.pill && "rounded-full",
    props.class
  )
);
</script>

<template>
  <component
    :is="as"
    :class="classes"
    :disabled="disabled"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>

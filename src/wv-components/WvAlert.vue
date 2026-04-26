<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvAlertVariants = cva(
  "flex items-start gap-3 p-4 rounded-md text-sm border",
  {
    variants: {
      variant: {
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        error: "bg-red-50 border-red-200 text-red-800",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const iconMap: Record<string, string> = {
  info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  success: "M5 13l4 4L19 7",
  warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
  error: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
};

interface Props {
  variant?: VariantProps<typeof wvAlertVariants>["variant"];
  title?: string;
  dismissible?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "info",
  dismissible: false,
});

const emit = defineEmits<{
  dismiss: [];
}>();

const classes = computed(() =>
  cn(wvAlertVariants({ variant: props.variant }), props.class)
);
</script>

<template>
  <div :class="classes" role="alert">
    <svg
      class="w-5 h-5 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path :d="iconMap[variant]" />
    </svg>
    <div class="flex-1 min-w-0">
      <p v-if="title" class="font-semibold mb-1">{{ title }}</p>
      <slot />
    </div>
    <button
      v-if="dismissible"
      class="flex-shrink-0 hover:opacity-70 cursor-pointer"
      @click="emit('dismiss')"
    >
      &times;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvTagVariants = cva(
  "inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-600 hover:bg-gray-200",
        vermilion: "bg-vermilion/10 text-vermilion hover:bg-vermilion/20",
        ink: "bg-ink/10 text-ink hover:bg-ink/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props {
  variant?: VariantProps<typeof wvTagVariants>["variant"];
  dismissible?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  dismissible: false,
});

const emit = defineEmits<{
  dismiss: [];
}>();

const classes = computed(() =>
  cn(wvTagVariants({ variant: props.variant }), props.class)
);
</script>

<template>
  <span :class="classes">
    <slot />
    <button
      v-if="dismissible"
      class="ml-0.5 hover:opacity-70 text-inherit cursor-pointer"
      @click="emit('dismiss')"
    >
      &times;
    </button>
  </span>
</template>

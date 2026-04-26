<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wvInputVariants = cva(
  "w-full transition-all duration-200 outline-none placeholder:text-gray-400",
  {
    variants: {
      variant: {
        default:
          "py-3 px-4 bg-white border border-gray-300 text-sm text-ink rounded-md focus:border-vermilion focus:ring-1 focus:ring-vermilion",
        ghost:
          "py-2 px-0 bg-transparent border-0 border-b-2 border-gray-200 text-ink rounded-none focus:border-vermilion",
        dark:
          "py-3 px-4 bg-white/[0.05] border border-white/[0.08] text-white rounded-xl placeholder:text-white/30 focus:border-vermilion",
      },
      size: {
        sm: "py-1.5 px-3 text-xs",
        default: "",
        lg: "py-4 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const statusClasses: Record<string, string> = {
  error:
    "border-red-500 focus:border-red-500 focus:ring-red-500 text-red-600",
  success:
    "border-green-600 focus:border-green-600 focus:ring-green-600",
  warning:
    "border-amber-600 focus:border-amber-600 focus:ring-amber-600",
};

interface Props {
  variant?: VariantProps<typeof wvInputVariants>["variant"];
  size?: VariantProps<typeof wvInputVariants>["size"];
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  status?: "error" | "success" | "warning";
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  modelValue: "",
  placeholder: "",
  disabled: false,
  type: "text",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const classes = computed(() =>
  cn(
    wvInputVariants({ variant: props.variant, size: props.size }),
    props.status && statusClasses[props.status],
    props.disabled && "opacity-40 cursor-not-allowed",
    props.class
  )
);
</script>

<template>
  <input
    :class="classes"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :type="type"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

type MotionType = "breathe" | "float" | "shimmer" | "ripple" | "rotate" | "pulse";

const motionClassMap: Record<MotionType, string> = {
  breathe: "animate-[wv-breathe_3s_ease-in-out_infinite]",
  float: "animate-[wv-float_4s_ease-in-out_infinite]",
  shimmer: "animate-[wv-shimmer_2s_linear_infinite]",
  ripple: "animate-[wv-ripple_2s_ease-out_infinite]",
  rotate: "animate-[wv-rotate_1.5s_linear_infinite]",
  pulse: "animate-[wv-pulse_2s_ease-out_infinite]",
};

const sizeMap: Record<string, string> = {
  breathe: "w-12 h-12 bg-gradient-to-br from-vermilion to-red-900 rounded-full",
  float: "w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-xl",
  shimmer: "w-24 h-1 bg-gradient-to-r from-transparent via-vermilion to-transparent bg-[length:200%_100%] rounded-full",
  ripple: "w-12 h-12 border-2 border-vermilion rounded-full",
  rotate: "w-12 h-12 border-[3px] border-white/10 border-t-vermilion rounded-full",
  pulse: "w-12 h-12 bg-gradient-to-br from-vermilion to-red-900 rounded-full",
};

interface Props {
  type?: MotionType;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "breathe",
});

const classes = computed(() =>
  cn(motionClassMap[props.type], sizeMap[props.type] || "", props.class)
);
</script>

<template>
  <div :class="classes" />
</template>

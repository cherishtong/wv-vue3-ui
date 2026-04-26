<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

const depthShadows: Record<number, string> = {
  1: "shadow-depth-1",
  2: "shadow-depth-2",
  3: "shadow-depth-3",
  4: "shadow-depth-4",
};

interface Props {
  depth?: 1 | 2 | 3 | 4;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  depth: 2,
});

const classes = computed(() =>
  cn("bg-white rounded-xl", depthShadows[props.depth], props.class)
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

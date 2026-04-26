<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
  tag?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "span",
});

const classes = computed(() =>
  cn(
    "bg-gradient-to-r from-ink via-vermilion to-ink bg-[length:200%_auto] bg-clip-text text-transparent animate-shine",
    props.class
  )
);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

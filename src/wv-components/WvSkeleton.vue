<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
}

const props = defineProps<Props>();

const classes = computed(() =>
  cn("animate-pulse bg-gray-200 rounded", props.class)
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

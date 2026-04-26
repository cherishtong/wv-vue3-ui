<script setup lang="ts">
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface Props {
  items?: BreadcrumbItem[];
  separator?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  separator: "/",
});
</script>

<template>
  <nav
    :class="cn('flex items-center gap-1.5 text-sm', props.class)"
    aria-label="Breadcrumb"
  >
    <template v-for="(item, idx) in items" :key="idx">
      <span v-if="idx > 0" class="text-gray-400 select-none">
        {{ separator }}
      </span>
      <a
        v-if="item.href && !item.active"
        :href="item.href"
        class="text-gray-500 hover:text-vermilion no-underline transition-colors"
      >
        {{ item.label }}
      </a>
      <span v-else class="text-vermilion font-medium">
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>

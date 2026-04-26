<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-vue-next";

interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface Props {
  brand?: string;
  brandHref?: string;
  items?: NavItem[];
  fixed?: boolean;
  transparent?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  brand: "",
  brandHref: "#",
  items: () => [],
  fixed: true,
  transparent: false,
});

const emit = defineEmits<{
  "toggle-menu": [];
}>();

const navClasses = computed(() =>
  cn(
    "flex items-center justify-between h-16 px-6 w-full",
    "backdrop-blur-[20px]",
    props.fixed && "fixed top-0 left-0 z-30",
    props.transparent
      ? "bg-transparent"
      : "bg-paper/72 border-b border-white/40",
    props.class
  )
);
</script>

<template>
  <nav :class="navClasses">
    <a
      :href="brandHref"
      class="flex items-center gap-3 text-inherit no-underline"
    >
      <div
        class="w-8 h-8 bg-gradient-to-br from-ink to-vermilion text-white flex items-center justify-center font-serif font-bold rounded-lg text-sm"
      >
        {{ brand?.[0] || "無" }}
      </div>
      <span
        v-if="brand"
        class="font-serif font-bold tracking-[0.2em] text-base"
      >
        {{ brand }}
      </span>
    </a>

    <!-- Desktop menu -->
    <div class="hidden md:flex items-center gap-1">
      <a
        v-for="(item, idx) in items"
        :key="idx"
        :href="item.href || '#'"
        :class="
          cn(
            'px-3 py-2 text-sm font-medium no-underline transition-colors rounded',
            item.active
              ? 'text-vermilion'
              : 'text-gray-500 hover:text-ink'
          )
        "
      >
        {{ item.label }}
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden p-2 cursor-pointer"
      @click="emit('toggle-menu')"
      aria-label="Toggle menu"
    >
      <Menu class="w-6 h-6" />
    </button>
  </nav>
</template>

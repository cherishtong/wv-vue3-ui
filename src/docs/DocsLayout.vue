<script setup lang="ts">
import DocsSidebar from "./DocsSidebar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const showSidebar = computed(() => true);
</script>

<template>
  <div class="docs-layout flex min-h-screen">
    <aside class="docs-sidebar fixed top-0 left-0 w-[260px] h-screen overflow-y-auto bg-paper/88 backdrop-blur-[16px] border-r border-black/[0.06] z-50 p-8">
      <div class="mb-8">
        <p class="font-serif text-lg font-bold tracking-[0.15em] text-ink m-0">无为设计</p>
        <p class="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 m-0">WuWei Design v0.1</p>
      </div>
      <DocsSidebar />
    </aside>

    <main class="docs-main ml-[260px] flex-1 max-w-[calc(100%-260px)]">
      <div class="max-w-[56rem] mx-auto px-8 py-16">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .docs-sidebar { display: none; }
  .docs-main { margin-left: 0; max-width: 100%; }
}
</style>

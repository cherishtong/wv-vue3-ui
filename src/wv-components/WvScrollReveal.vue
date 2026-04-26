<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  delay?: number;
  threshold?: number;
  once?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  threshold: 0.1,
  once: true,
});

const el = ref<HTMLElement>();
const visible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!el.value) return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true;
          if (props.once && observer && el.value) {
            observer.unobserve(el.value);
          }
        } else if (!props.once) {
          visible.value = false;
        }
      });
    },
    { threshold: props.threshold }
  );
  observer.observe(el.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div
    ref="el"
    :class="
      cn(
        'opacity-0 translate-y-10 transition-[opacity,transform] duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]',
        visible && 'opacity-100 translate-y-0',
        props.class
      )
    "
    :style="{ transitionDelay: delay + 's' }"
  >
    <slot />
  </div>
</template>

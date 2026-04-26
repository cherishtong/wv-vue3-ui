import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/style.css"],
  outDir: "dist",
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["vue", "vue-router", "@vue/runtime-core", "@vue/runtime-dom"],
});

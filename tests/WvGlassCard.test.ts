import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvGlassCard from "../src/wv-components/WvGlassCard.vue";

describe("WvGlassCard", () => {
  it("renders light variant by default", () => {
    const wrapper = mount(WvGlassCard, { slots: { default: "Glass" } });
    expect(wrapper.classes()).toContain("bg-white/60");
  });

  it("renders dark variant", () => {
    const wrapper = mount(WvGlassCard, {
      props: { variant: "dark" },
      slots: { default: "Dark" },
    });
    expect(wrapper.classes()).toContain("bg-dark-matrix/75");
    expect(wrapper.classes()).toContain("text-white");
  });

  it("renders highlight line", () => {
    const wrapper = mount(WvGlassCard, { slots: { default: "Glass" } });
    expect(wrapper.find("span").exists()).toBe(true);
  });

  it("renders slot content", () => {
    const wrapper = mount(WvGlassCard, { slots: { default: "<span>Inner</span>" } });
    expect(wrapper.html()).toContain("Inner");
  });
});

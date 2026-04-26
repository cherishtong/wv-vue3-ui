import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvTextGradient from "../src/wv-components/WvTextGradient.vue";

describe("WvTextGradient", () => {
  it("renders slot content", () => {
    const wrapper = mount(WvTextGradient, {
      slots: { default: "流光文字" },
    });
    expect(wrapper.text()).toBe("流光文字");
  });

  it("has gradient animation classes", () => {
    const wrapper = mount(WvTextGradient, {
      slots: { default: "Gradient" },
    });
    expect(wrapper.classes()).toContain("bg-clip-text");
    expect(wrapper.classes()).toContain("animate-shine");
  });

  it("renders with custom tag", () => {
    const wrapper = mount(WvTextGradient, {
      props: { tag: "h1" },
      slots: { default: "Title" },
    });
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});

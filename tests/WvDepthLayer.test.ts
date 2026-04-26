import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvDepthLayer from "../src/wv-components/WvDepthLayer.vue";

describe("WvDepthLayer", () => {
  it("renders depth shadow", () => {
    const wrapper = mount(WvDepthLayer, {
      props: { depth: 2 },
      slots: { default: "Content" },
    });
    expect(wrapper.classes()).toContain("shadow-depth-2");
  });

  it("renders depth 1 shadow", () => {
    const wrapper = mount(WvDepthLayer, {
      props: { depth: 1 },
      slots: { default: "D1" },
    });
    expect(wrapper.classes()).toContain("shadow-depth-1");
  });

  it("renders depth 4 shadow", () => {
    const wrapper = mount(WvDepthLayer, {
      props: { depth: 4 },
      slots: { default: "D4" },
    });
    expect(wrapper.classes()).toContain("shadow-depth-4");
  });

  it("renders slot content", () => {
    const wrapper = mount(WvDepthLayer, {
      slots: { default: "<p>Inner content</p>" },
    });
    expect(wrapper.html()).toContain("Inner content");
  });
});

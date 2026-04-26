import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvMotion from "../src/wv-components/WvMotion.vue";

describe("WvMotion", () => {
  it("renders breathe type", () => {
    const wrapper = mount(WvMotion, { props: { type: "breathe" } });
    expect(wrapper.classes()).toContain("rounded-full");
  });

  it("renders float type", () => {
    const wrapper = mount(WvMotion, { props: { type: "float" } });
    expect(wrapper.classes()).toContain("rounded-xl");
  });

  it("renders shimmer type", () => {
    const wrapper = mount(WvMotion, { props: { type: "shimmer" } });
    expect(wrapper.classes()).toContain("rounded-full");
    expect(wrapper.classes()).toContain("w-24");
  });

  it("renders ripple type", () => {
    const wrapper = mount(WvMotion, { props: { type: "ripple" } });
    expect(wrapper.classes()).toContain("border-vermilion");
  });

  it("renders rotate type", () => {
    const wrapper = mount(WvMotion, { props: { type: "rotate" } });
    expect(wrapper.classes()).toContain("border-t-vermilion");
  });

  it("renders pulse type", () => {
    const wrapper = mount(WvMotion, { props: { type: "pulse" } });
    expect(wrapper.classes()).toContain("rounded-full");
  });
});

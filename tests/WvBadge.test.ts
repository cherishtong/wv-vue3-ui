import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvBadge from "../src/wv-components/WvBadge.vue";

describe("WvBadge", () => {
  it("renders vermilion badge", () => {
    const wrapper = mount(WvBadge, {
      props: { variant: "vermilion" },
      slots: { default: "New" },
    });
    expect(wrapper.text()).toBe("New");
    expect(wrapper.classes()).toContain("bg-vermilion");
  });

  it("renders ink badge", () => {
    const wrapper = mount(WvBadge, {
      props: { variant: "ink" },
      slots: { default: "99+" },
    });
    expect(wrapper.classes()).toContain("bg-ink");
  });

  it("renders dot badge", () => {
    const wrapper = mount(WvBadge, { props: { variant: "dot" } });
    expect(wrapper.classes()).toContain("rounded-full");
    expect(wrapper.classes()).toContain("w-2");
  });
});

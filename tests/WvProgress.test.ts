import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvProgress from "../src/wv-components/WvProgress.vue";

describe("WvProgress", () => {
  it("renders with default value", () => {
    const wrapper = mount(WvProgress, { props: { modelValue: 60 } });
    const bar = wrapper.find("[role='progressbar'] > div");
    expect(bar.element.getAttribute("style")).toContain("width: 60%");
    expect(wrapper.attributes("role")).toBe("progressbar");
  });

  it("renders vermilion variant", () => {
    const wrapper = mount(WvProgress, {
      props: { modelValue: 80, variant: "vermilion" },
    });
    const bar = wrapper.find("[role='progressbar'] > div");
    expect(bar.classes()).toContain("bg-vermilion");
  });

  it("renders gradient variant", () => {
    const wrapper = mount(WvProgress, {
      props: { modelValue: 40, variant: "gradient" },
    });
    const bar = wrapper.find("[role='progressbar'] > div");
    expect(bar.classes()).toContain("bg-gradient-to-r");
  });

  it("clamps value to max", () => {
    const wrapper = mount(WvProgress, {
      props: { modelValue: 150, max: 100 },
    });
    const bar = wrapper.find("[role='progressbar'] > div");
    expect(bar.element.getAttribute("style")).toContain("width: 100%");
  });

  it("sets aria attributes", () => {
    const wrapper = mount(WvProgress, { props: { modelValue: 50, max: 100 } });
    expect(wrapper.attributes("aria-valuenow")).toBe("50");
    expect(wrapper.attributes("aria-valuemax")).toBe("100");
  });
});

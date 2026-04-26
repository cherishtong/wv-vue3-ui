import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvSteps from "../src/wv-components/WvSteps.vue";

describe("WvSteps", () => {
  it("renders all steps", () => {
    const wrapper = mount(WvSteps, {
      props: {
        current: 1,
        items: [
          { label: "第一步" },
          { label: "第二步" },
          { label: "第三步" },
        ],
      },
    });
    expect(wrapper.text()).toContain("第一步");
    expect(wrapper.text()).toContain("第二步");
    expect(wrapper.text()).toContain("第三步");
  });

  it("marks step as done when before current", () => {
    const wrapper = mount(WvSteps, {
      props: {
        current: 2,
        items: [{ label: "已完成" }, { label: "当前" }, { label: "待做" }],
      },
    });
    expect(wrapper.html()).toContain("bg-vermilion");
  });
});

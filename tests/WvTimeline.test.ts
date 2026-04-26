import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvTimeline from "../src/wv-components/WvTimeline.vue";

describe("WvTimeline", () => {
  it("renders timeline items", () => {
    const wrapper = mount(WvTimeline, {
      props: {
        items: [
          { time: "2026", title: "事件一", desc: "描述一" },
          { time: "2025", title: "事件二", desc: "描述二" },
        ],
      },
    });
    expect(wrapper.text()).toContain("事件一");
    expect(wrapper.text()).toContain("事件二");
    expect(wrapper.text()).toContain("描述一");
  });

  it("renders ink variant dot", () => {
    const wrapper = mount(WvTimeline, {
      props: {
        items: [{ time: "2026", title: "Test", variant: "ink" }],
      },
    });
    expect(wrapper.find(".border-ink").exists()).toBe(true);
  });
});

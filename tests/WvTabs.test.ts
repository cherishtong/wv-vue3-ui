import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvTabs from "../src/wv-components/WvTabs.vue";

describe("WvTabs", () => {
  it("renders tab items", () => {
    const wrapper = mount(WvTabs, {
      props: {
        modelValue: "all",
        items: [
          { label: "全部", value: "all" },
          { label: "设计中", value: "design" },
        ],
      },
    });
    expect(wrapper.text()).toContain("全部");
    expect(wrapper.text()).toContain("设计中");
  });

  it("renders slot content for active tab", async () => {
    const wrapper = mount(WvTabs, {
      props: {
        modelValue: "all",
        items: [{ label: "全部", value: "all" }],
      },
      slots: { all: "<div class='tab-content'>Content A</div>" },
    });
    expect(wrapper.html()).toContain("Content A");
  });
});

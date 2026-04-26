import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvDropdown from "../src/wv-components/WvDropdown.vue";

describe("WvDropdown", () => {
  it("renders trigger button with label", () => {
    const wrapper = mount(WvDropdown, {
      props: {
        triggerLabel: "菜单",
        items: [{ label: "编辑" }, { label: "删除" }],
      },
    });
    expect(wrapper.html()).toContain("菜单");
  });

  it("accepts items prop", () => {
    const wrapper = mount(WvDropdown, {
      props: {
        items: [{ label: "编辑", active: true }],
      },
    });
    expect(wrapper.props("items")).toHaveLength(1);
    expect(wrapper.props("items")[0].label).toBe("编辑");
  });

  it("renders with custom class", () => {
    const wrapper = mount(WvDropdown, {
      props: {
        triggerLabel: "Menu",
        items: [{ label: "Item" }],
        class: "custom-dropdown",
      },
    });
    expect(wrapper.find("button").classes()).toContain("custom-dropdown");
  });
});

import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvBreadcrumb from "../src/wv-components/WvBreadcrumb.vue";

describe("WvBreadcrumb", () => {
  it("renders breadcrumb items", () => {
    const wrapper = mount(WvBreadcrumb, {
      props: {
        items: [
          { label: "首页", href: "/" },
          { label: "组件", active: true },
        ],
      },
    });
    expect(wrapper.text()).toContain("首页");
    expect(wrapper.text()).toContain("组件");
  });

  it("renders active item as span", () => {
    const wrapper = mount(WvBreadcrumb, {
      props: {
        items: [{ label: "当前页", active: true }],
      },
    });
    expect(wrapper.find("span.text-vermilion").exists()).toBe(true);
  });

  it("renders separators between items", () => {
    const wrapper = mount(WvBreadcrumb, {
      props: {
        items: [
          { label: "A", href: "/a" },
          { label: "B", href: "/b" },
          { label: "C", active: true },
        ],
      },
    });
    expect(wrapper.text()).toContain("/");
  });
});

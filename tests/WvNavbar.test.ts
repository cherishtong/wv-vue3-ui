import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvNavbar from "../src/wv-components/WvNavbar.vue";

describe("WvNavbar", () => {
  it("renders brand text", () => {
    const wrapper = mount(WvNavbar, {
      props: { brand: "无为设计" },
    });
    expect(wrapper.text()).toContain("无为设计");
  });

  it("renders menu items", () => {
    const wrapper = mount(WvNavbar, {
      props: {
        brand: "WuWei",
        items: [
          { label: "首页", href: "/" },
          { label: "组件", href: "/components", active: true },
        ],
      },
    });
    const links = wrapper.findAll("a");
    expect(links.some((l) => l.text() === "首页")).toBe(true);
    expect(links.some((l) => l.text() === "组件")).toBe(true);
  });

  it("emits toggle-menu on hamburger click", async () => {
    const wrapper = mount(WvNavbar, { props: { brand: "WuWei" } });
    const hamburger = wrapper.find("button");
    await hamburger.trigger("click");
    expect(wrapper.emitted("toggle-menu")).toBeTruthy();
  });

  it("renders logo character from brand", () => {
    const wrapper = mount(WvNavbar, { props: { brand: "测试" } });
    expect(wrapper.text()).toContain("测");
  });
});

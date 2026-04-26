import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvTag from "../src/wv-components/WvTag.vue";

describe("WvTag", () => {
  it("renders default tag", () => {
    const wrapper = mount(WvTag, { slots: { default: "Default" } });
    expect(wrapper.text()).toBe("Default");
    expect(wrapper.classes()).toContain("bg-gray-100");
  });

  it("renders vermilion tag", () => {
    const wrapper = mount(WvTag, {
      props: { variant: "vermilion" },
      slots: { default: "朱砂" },
    });
    expect(wrapper.classes()).toContain("bg-vermilion/10");
  });

  it("renders dismissible tag with close button", () => {
    const wrapper = mount(WvTag, {
      props: { dismissible: true },
      slots: { default: "可关闭" },
    });
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("emits dismiss when close button clicked", async () => {
    const wrapper = mount(WvTag, {
      props: { dismissible: true },
      slots: { default: "可关闭" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("dismiss")).toBeTruthy();
  });
});

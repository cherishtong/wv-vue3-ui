import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvAlert from "../src/wv-components/WvAlert.vue";

describe("WvAlert", () => {
  it("renders info alert", () => {
    const wrapper = mount(WvAlert, {
      props: { variant: "info" },
      slots: { default: "Info message" },
    });
    expect(wrapper.text()).toContain("Info message");
    expect(wrapper.classes()).toContain("bg-blue-50");
  });

  it("renders success alert", () => {
    const wrapper = mount(WvAlert, {
      props: { variant: "success" },
      slots: { default: "Success" },
    });
    expect(wrapper.classes()).toContain("bg-green-50");
  });

  it("renders with title", () => {
    const wrapper = mount(WvAlert, {
      props: { variant: "info", title: "标题" },
      slots: { default: "内容" },
    });
    expect(wrapper.text()).toContain("标题");
    expect(wrapper.text()).toContain("内容");
  });

  it("renders dismissible with button", () => {
    const wrapper = mount(WvAlert, {
      props: { dismissible: true },
      slots: { default: "Dismissible" },
    });
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("emits dismiss on button click", async () => {
    const wrapper = mount(WvAlert, {
      props: { dismissible: true },
      slots: { default: "Close me" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("dismiss")).toBeTruthy();
  });

  it("renders SVG icon", () => {
    const wrapper = mount(WvAlert, { slots: { default: "With icon" } });
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});

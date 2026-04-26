import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvStatusPulse from "../src/wv-components/WvStatusPulse.vue";

describe("WvStatusPulse", () => {
  it("renders online status", () => {
    const wrapper = mount(WvStatusPulse, {
      props: { status: "online", label: "在线" },
    });
    expect(wrapper.text()).toContain("在线");
    expect(wrapper.find(".bg-green-500").exists()).toBe(true);
  });

  it("renders offline status", () => {
    const wrapper = mount(WvStatusPulse, {
      props: { status: "offline", label: "离线" },
    });
    expect(wrapper.find(".bg-gray-400").exists()).toBe(true);
  });

  it("renders busy status", () => {
    const wrapper = mount(WvStatusPulse, {
      props: { status: "busy", label: "忙碌" },
    });
    expect(wrapper.find(".bg-amber-500").exists()).toBe(true);
  });

  it("renders without label", () => {
    const wrapper = mount(WvStatusPulse, { props: { status: "online" } });
    expect(wrapper.find(".bg-green-500").exists()).toBe(true);
  });
});

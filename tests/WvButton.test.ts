import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvButton from "../src/wv-components/WvButton.vue";

describe("WvButton", () => {
  it("renders with default variant", () => {
    const wrapper = mount(WvButton, { slots: { default: "Click me" } });
    expect(wrapper.text()).toBe("Click me");
    expect(wrapper.classes()).toContain("bg-ink");
  });

  it("renders ghost variant", () => {
    const wrapper = mount(WvButton, {
      props: { variant: "ghost" },
      slots: { default: "Ghost" },
    });
    expect(wrapper.classes()).toContain("bg-transparent");
  });

  it("renders vermilion variant", () => {
    const wrapper = mount(WvButton, {
      props: { variant: "vermilion" },
      slots: { default: "V" },
    });
    expect(wrapper.classes()).toContain("bg-vermilion");
  });

  it("renders pill prop", () => {
    const wrapper = mount(WvButton, {
      props: { pill: true },
      slots: { default: "Pill" },
    });
    expect(wrapper.classes()).toContain("rounded-full");
  });

  it("renders small size", () => {
    const wrapper = mount(WvButton, {
      props: { size: "sm" },
      slots: { default: "Small" },
    });
    expect(wrapper.classes()).toContain("py-1.5");
  });

  it("renders large size", () => {
    const wrapper = mount(WvButton, {
      props: { size: "lg" },
      slots: { default: "Large" },
    });
    expect(wrapper.classes()).toContain("py-4");
  });

  it("disables button when disabled", () => {
    const wrapper = mount(WvButton, {
      props: { disabled: true },
      slots: { default: "Disabled" },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });

  it("renders text-gradient variant", () => {
    const wrapper = mount(WvButton, {
      props: { variant: "text-gradient" },
      slots: { default: "Shine" },
    });
    expect(wrapper.classes()).toContain("bg-clip-text");
  });

  it("emits click event", async () => {
    const wrapper = mount(WvButton, { slots: { default: "Click" } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});

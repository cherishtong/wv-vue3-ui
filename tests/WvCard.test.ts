import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvCard from "../src/wv-components/WvCard.vue";

describe("WvCard", () => {
  it("renders default card", () => {
    const wrapper = mount(WvCard, { slots: { default: "Content" } });
    expect(wrapper.text()).toBe("Content");
    expect(wrapper.classes()).toContain("bg-white");
  });

  it("renders ru variant", () => {
    const wrapper = mount(WvCard, {
      props: { variant: "ru" },
      slots: { default: "Dark" },
    });
    expect(wrapper.classes()).toContain("text-white");
  });

  it("applies custom class", () => {
    const wrapper = mount(WvCard, {
      props: { class: "my-custom" },
      slots: { default: "Custom" },
    });
    expect(wrapper.classes()).toContain("my-custom");
  });
});

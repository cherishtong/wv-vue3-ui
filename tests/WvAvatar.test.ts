import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvAvatar from "../src/wv-components/WvAvatar.vue";

describe("WvAvatar", () => {
  it("renders with fallback text", () => {
    const wrapper = mount(WvAvatar, { props: { fallback: "张" } });
    expect(wrapper.text()).toBe("张");
  });

  it("renders small size", () => {
    const wrapper = mount(WvAvatar, { props: { size: "sm", fallback: "A" } });
    expect(wrapper.classes()).toContain("w-7");
  });

  it("renders large size", () => {
    const wrapper = mount(WvAvatar, { props: { size: "lg", fallback: "A" } });
    expect(wrapper.classes()).toContain("w-12");
  });

  it("renders gradient variant", () => {
    const wrapper = mount(WvAvatar, {
      props: { variant: "gradient", fallback: "Z" },
    });
    expect(wrapper.classes()).toContain("bg-gradient-to-br");
  });

  it("renders img when src provided", () => {
    const wrapper = mount(WvAvatar, {
      props: { src: "https://example.com/avatar.png", fallback: "U" },
    });
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://example.com/avatar.png"
    );
  });
});

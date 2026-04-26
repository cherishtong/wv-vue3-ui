import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvInput from "../src/wv-components/WvInput.vue";

describe("WvInput", () => {
  it("renders with default props", () => {
    const wrapper = mount(WvInput);
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    expect(input.attributes("type")).toBe("text");
  });

  it("renders with placeholder", () => {
    const wrapper = mount(WvInput, { props: { placeholder: "请输入" } });
    expect(wrapper.find("input").attributes("placeholder")).toBe("请输入");
  });

  it("renders ghost variant", () => {
    const wrapper = mount(WvInput, { props: { variant: "ghost" } });
    expect(wrapper.find("input").classes()).toContain("bg-transparent");
  });

  it("renders error status", () => {
    const wrapper = mount(WvInput, { props: { status: "error" } });
    expect(wrapper.find("input").classes()).toContain("border-red-500");
  });

  it("renders success status", () => {
    const wrapper = mount(WvInput, { props: { status: "success" } });
    expect(wrapper.find("input").classes()).toContain("border-green-600");
  });

  it("renders small size", () => {
    const wrapper = mount(WvInput, { props: { size: "sm" } });
    expect(wrapper.find("input").classes()).toContain("py-1.5");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(WvInput);
    const input = wrapper.find("input");
    await input.setValue("hello");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["hello"]);
  });

  it("disables input", () => {
    const wrapper = mount(WvInput, { props: { disabled: true } });
    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });
});

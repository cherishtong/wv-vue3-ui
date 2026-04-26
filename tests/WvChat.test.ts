import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvChat from "../src/wv-components/WvChat.vue";

describe("WvChat", () => {
  it("renders header with title", () => {
    const wrapper = mount(WvChat, { props: { headerTitle: "助手" } });
    expect(wrapper.text()).toContain("助手");
  });

  it("renders messages", () => {
    const wrapper = mount(WvChat, {
      props: {
        messages: [
          { role: "assistant", content: "你好" },
          { role: "user", content: "Hello" },
        ],
      },
    });
    expect(wrapper.text()).toContain("你好");
    expect(wrapper.text()).toContain("Hello");
  });

  it("has input field", () => {
    const wrapper = mount(WvChat);
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("emits send on button click", async () => {
    const wrapper = mount(WvChat);
    const input = wrapper.find("input");
    await input.setValue("test message");
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("send")?.[0]).toEqual(["test message"]);
  });

  it("clears input after send", async () => {
    const wrapper = mount(WvChat);
    const input = wrapper.find("input");
    await input.setValue("test");
    await wrapper.find("button").trigger("click");
    const inputEl = input.element as HTMLInputElement;
    expect(inputEl.value).toBe("");
  });

  it("emits send on Enter key", async () => {
    const wrapper = mount(WvChat);
    const input = wrapper.find("input");
    await input.setValue("hello");
    await input.trigger("keydown.enter");
    expect(wrapper.emitted("send")?.[0]).toEqual(["hello"]);
  });
});

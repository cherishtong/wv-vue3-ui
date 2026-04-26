import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvReasoning from "../src/wv-components/WvReasoning.vue";

describe("WvReasoning", () => {
  it("renders reasoning steps", () => {
    const wrapper = mount(WvReasoning, {
      props: { steps: "步骤1 -> 步骤2", expanded: true },
    });
    expect(wrapper.text()).toContain("步骤1 -> 步骤2");
  });

  it("hides content when collapsed", () => {
    const wrapper = mount(WvReasoning, {
      props: { steps: "secret", expanded: false },
    });
    expect(wrapper.text()).not.toContain("secret");
  });

  it("toggles expanded on header click", async () => {
    const wrapper = mount(WvReasoning, {
      props: { steps: "test", expanded: true },
    });
    const header = wrapper.find(".cursor-pointer");
    await header.trigger("click");
    expect(wrapper.emitted("update:expanded")?.[0]).toEqual([false]);
  });

  it("renders AI label text", () => {
    const wrapper = mount(WvReasoning);
    expect(wrapper.text()).toContain("AI 推理路径");
  });
});

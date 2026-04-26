import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvPagination from "../src/wv-components/WvPagination.vue";

describe("WvPagination", () => {
  it("renders page buttons", () => {
    const wrapper = mount(WvPagination, {
      props: { modelValue: 1, total: 5 },
    });
    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBeGreaterThan(3);
  });

  it("highlights current page", () => {
    const wrapper = mount(WvPagination, {
      props: { modelValue: 3, total: 5 },
    });
    const activeBtn = wrapper.find("button.bg-ink");
    expect(activeBtn.exists()).toBe(true);
    expect(activeBtn.text()).toBe("3");
  });

  it("disables previous button on first page", () => {
    const wrapper = mount(WvPagination, {
      props: { modelValue: 1, total: 5 },
    });
    const buttons = wrapper.findAll("button");
    expect(buttons[0].attributes("disabled")).toBeDefined();
  });

  it("emits update:modelValue on page click", async () => {
    const wrapper = mount(WvPagination, {
      props: { modelValue: 1, total: 3 },
    });
    const pages = wrapper.findAll("button");
    await pages[2].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([2]);
  });
});

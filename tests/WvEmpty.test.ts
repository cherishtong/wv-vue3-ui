import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvEmpty from "../src/wv-components/WvEmpty.vue";

describe("WvEmpty", () => {
  it("renders empty text", () => {
    const wrapper = mount(WvEmpty, { props: { text: "暂无数据" } });
    expect(wrapper.text()).toContain("暂无数据");
  });

  it("renders action slot", () => {
    const wrapper = mount(WvEmpty, {
      slots: { action: "<button>创建</button>" },
    });
    expect(wrapper.html()).toContain("创建");
  });

  it("renders default icon", () => {
    const wrapper = mount(WvEmpty);
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});

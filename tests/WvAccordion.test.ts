import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvAccordion from "../src/wv-components/WvAccordion.vue";

describe("WvAccordion", () => {
  it("renders accordion items", () => {
    const wrapper = mount(WvAccordion, {
      props: {
        items: [
          { title: "标题一", content: "内容一", value: "1" },
          { title: "标题二", content: "内容二", value: "2" },
        ],
      },
    });
    expect(wrapper.text()).toContain("标题一");
    expect(wrapper.text()).toContain("标题二");
  });
});

import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvSpatialStack from "../src/wv-components/WvSpatialStack.vue";

describe("WvSpatialStack", () => {
  it("renders default layers", () => {
    const wrapper = mount(WvSpatialStack);
    expect(wrapper.text()).toContain("墨");
    expect(wrapper.text()).toContain("朱");
    expect(wrapper.text()).toContain("纸");
  });

  it("renders custom layers", () => {
    const wrapper = mount(WvSpatialStack, {
      props: {
        layers: [
          { char: "A", text: "Layer A" },
          { char: "B", text: "Layer B" },
        ],
      },
    });
    expect(wrapper.text()).toContain("A");
    expect(wrapper.text()).toContain("B");
  });

  it("renders 3 layers total", () => {
    const wrapper = mount(WvSpatialStack);
    expect(wrapper.findAll(".spatial-layer").length).toBe(3);
  });
});

import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvSkeleton from "../src/wv-components/WvSkeleton.vue";

describe("WvSkeleton", () => {
  it("renders with animate-pulse class", () => {
    const wrapper = mount(WvSkeleton);
    expect(wrapper.classes()).toContain("animate-pulse");
  });

  it("applies custom class", () => {
    const wrapper = mount(WvSkeleton, { props: { class: "h-4 w-3/5" } });
    expect(wrapper.classes()).toContain("h-4");
    expect(wrapper.classes()).toContain("w-3/5");
  });
});

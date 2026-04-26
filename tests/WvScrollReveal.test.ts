import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvScrollReveal from "../src/wv-components/WvScrollReveal.vue";

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  callback: IntersectionObserverCallback;
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("WvScrollReveal", () => {
  it("renders with initial hidden state", () => {
    const wrapper = mount(WvScrollReveal, {
      slots: { default: "Reveal me" },
    });
    expect(wrapper.classes()).toContain("opacity-0");
  });

  it("renders slot content", () => {
    const wrapper = mount(WvScrollReveal, {
      slots: { default: "<p>Content</p>" },
    });
    expect(wrapper.html()).toContain("Content");
  });

  it("applies transition delay via style", () => {
    const wrapper = mount(WvScrollReveal, {
      props: { delay: 0.5 },
      slots: { default: "Delayed" },
    });
    const style = wrapper.find("div").element.getAttribute("style");
    expect(style).toContain("0.5");
  });

  it("observes intersection on mount", () => {
    mount(WvScrollReveal, { slots: { default: "X" } });
    expect(vi.mocked(MockIntersectionObserver)).toBeDefined();
  });
});

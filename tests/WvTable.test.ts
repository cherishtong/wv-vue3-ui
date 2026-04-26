import { describe, it, expect } from "vite-plus/test";
import { mount } from "@vue/test-utils";
import WvTable from "../src/wv-components/WvTable.vue";

describe("WvTable", () => {
  it("renders table headers", () => {
    const wrapper = mount(WvTable, {
      props: {
        columns: [
          { key: "name", label: "名称" },
          { key: "status", label: "状态" },
        ],
        data: [],
      },
    });
    expect(wrapper.text()).toContain("名称");
    expect(wrapper.text()).toContain("状态");
  });

  it("renders table data", () => {
    const wrapper = mount(WvTable, {
      props: {
        columns: [{ key: "name", label: "名称" }],
        data: [{ name: "测试" }],
      },
    });
    expect(wrapper.text()).toContain("测试");
  });

  it("shows empty message when no data", () => {
    const wrapper = mount(WvTable, {
      props: {
        columns: [{ key: "name", label: "名称" }],
        data: [],
      },
    });
    expect(wrapper.text()).toContain("暂无数据");
  });

  it("renders custom cell slot", () => {
    const wrapper = mount(WvTable, {
      props: {
        columns: [{ key: "status", label: "状态" }],
        data: [{ status: "进行中" }],
      },
      slots: {
        "cell-status": "<span class='custom-badge'>进行中</span>",
      },
    });
    expect(wrapper.html()).toContain("custom-badge");
  });
});

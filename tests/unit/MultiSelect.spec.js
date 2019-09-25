import { shallowMount } from "@vue/test-utils";
import MultiSelect from "@/components/MultiSelect";

const props = [{ key: 2021, doc_count: 9740, disabled: false, value: 2021 }];

describe("MultiSelect.vue", () => {
  let element;

  beforeEach(() => {
    element = shallowMount(MultiSelect, {
      propsData: { options: props }
    });
  });

  it("test default never selected", () => {
    expect(element.findAll("option").length).toBe(1);
    expect(element.vm.selected).toEqual([]);
  });

  it("test selected", () => {
    element.findAll("option").at(0).element.selected = true;
    element.find("select").trigger("change");

    expect(element.vm.selected).not.toBe([]);
  });

  it("test emit change event", () => {
    const option = element.findAll("option").at(0).element;

    option.selected = true;
    element.find("select").trigger("change");

    expect(element.emitted().change).toBeTruthy();
    expect(element.emitted().change).toHaveLength(1);
    expect(element.emitted().change[0][0]).toEqual([+option.value]);
  });

  it("test not emit change event on input", () => {
    element.find("select").trigger("input");

    expect(element.emitted().change).toBeFalsy();
  });

  it("test not emit change by default", () => {
    expect(element.emitted().change).toBeFalsy();
  });
});

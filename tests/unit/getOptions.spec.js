import getOptions from "@/utils/getOptions";

const labels = {
  bathrooms_type: {
    "1": "раздельный",
    "2": "совмещенный",
    "3": "раздельный и совмещенный"
  }
};
const facets = {
  bathrooms_type: {
    buckets: [
      { key: 2, doc_count: 13568, disabled: false },
      { key: 3, doc_count: 7102, disabled: false },
      { key: 1, doc_count: 5753, disabled: false }
    ]
  },
  term_gc: {
    buckets: [
      { key: 2021, doc_count: 9740, disabled: false },
      { key: 2020, doc_count: 7175, disabled: false },
      { key: 2019, doc_count: 3735, disabled: false },
      { key: 2022, doc_count: 2136, disabled: false },
      { key: 2023, doc_count: 672, disabled: false }
    ]
  }
};

const expected1 = [
  { key: 2, doc_count: 13568, disabled: false, value: "совмещенный" },
  {
    key: 3,
    doc_count: 7102,
    disabled: false,
    value: "раздельный и совмещенный"
  },
  { key: 1, doc_count: 5753, disabled: false, value: "раздельный" }
];

const expected2 = [
  { disabled: false, doc_count: 9740, key: 2021, value: 2021 },
  { disabled: false, doc_count: 7175, key: 2020, value: 2020 },
  { disabled: false, doc_count: 3735, key: 2019, value: 2019 },
  { disabled: false, doc_count: 2136, key: 2022, value: 2022 },
  { disabled: false, doc_count: 672, key: 2023, value: 2023 }
];

describe("getOptions.js", () => {
  it.each`
    key                 | facet     | label     | expected
    ${"bathrooms_type"} | ${facets} | ${labels} | ${expected1}
    ${"term_gc"}        | ${facets} | ${labels} | ${expected2}
  `("get options for $key", ({ key, facet, label, expected }) => {
    const options = getOptions(key, facet, label);
    expect(options).toEqual(expected);
  });
});

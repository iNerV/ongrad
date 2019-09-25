import makeQuery from "@/utils/makeQuery";

const given = {
  price: { min_price: 3000000, max_price: 25000000 },
  floor: { min_floor: 1, max_floor: 100, floor_not_first_not_last: true },
  rooms: [1, 3],
  term_gc: [2020, 2019, 2022],
  building_type: [3, 1]
};

const expected = {
  min_price: 3000000,
  max_price: 25000000,
  min_floor: 1,
  max_floor: 100,
  floor_not_first_not_last: true,
  rooms: [1, 3],
  term_gc: [2020, 2019, 2022],
  building_type: [3, 1]
};

describe("makeQuery.js", () => {
  it("make query from deep object", () => {
    const options = makeQuery(given);
    expect(options).toEqual(expected);
  });
});

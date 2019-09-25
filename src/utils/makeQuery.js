const makeQuery = selected => {
  return [...Object.entries(selected)]
    .map(([key, value]) =>
      Array.isArray(value) ? { [key]: value } : { ...value }
    )
    .reduce((o, v) => Object.assign(o, v), {});
};

export default makeQuery;

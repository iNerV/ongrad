const getOptions = (key, facets, labels) => {
  facets = facets?.[key]?.buckets;
  labels = labels?.[key];

  if (!facets) return [];
  return facets.map(item => ({
    ...item,
    value: labels ? labels[item.key] : item.key
  }));
};

export default getOptions;

/**
 * Normalize
 *
 * Convert a passed array into a keyed object
 */
const normalize = (array, key) =>
  array.reduce(
    (collector, item) => ({
      ...collector,
      [item[key]]: item,
    }),
    {}
  );

export default normalize;

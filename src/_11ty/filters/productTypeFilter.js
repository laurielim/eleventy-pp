/**
 * Filters out item with different product type from the passed collection
 * based on the passed product type
 *
 * @param {Array} collection The 11ty collection we want to take from
 * @param {String} productType The 11ty collection we want to take from
 * @returns {Array} The resulting collection
 */
 module.exports = (collection, productType) =>{
  if (!collection || !productType) return collection;
  let filteredItems = collection.filter(x => x.data.productType === productType);
  return filteredItems;
}

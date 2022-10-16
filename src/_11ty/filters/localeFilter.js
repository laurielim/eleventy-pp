/**
 * Filters out item with different locale from the passed collection
 * based on the passed locale
 *
 * @param {Array} collection The 11ty collection we want to take from
 * @param {String} locale The 11ty collection we want to take from
 * @returns {Array} The resulting collection
 */
 module.exports = (collection, locale) =>{
  if (!collection || !locale) return collection;
  let filteredItems = collection.filter(x => x.data.locale === locale);
  return filteredItems;
}
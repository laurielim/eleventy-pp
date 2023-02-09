/**
 * Takes a collection and returns it back in alphabetical order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
 module.exports = collection =>
   collection.sort((a, b) => {
    if (a.data.title > b.data.title) return 1;
    else if (a.data.title < b.data.title) return -1;
    else return 0;
  });
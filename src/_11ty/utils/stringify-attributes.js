/**
 * Turn an object into a string of HTML attributes
 *
 * @param {Object} attributeMap object of attribute-value pairs
 * @returns {String} string of attribute-value pairs
 */
 module.exports = (attributeMap) =>
  Object.entries(attributeMap)
    .map(([attribute, value]) =>
      typeof value === 'undefined' ? '' : `${attribute}="${value}"`
    ).join(' ');

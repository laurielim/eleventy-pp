const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'product', order: 'sys.createdAt' })
  .then(function(response) {
    const products = response.items
    .map(function(products) {
      products.fields.date= new Date(products.sys.updatedAt);
      return products.fields;
    });
    return products;
  })
  .catch(console.error);
};
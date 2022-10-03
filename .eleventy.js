module.exports = (config) => {
	config.addWatchTarget("./src/static/scss/");
  config.addTransform("minify", require("./src/transforms/minify"));

	config.addPassthroughCopy('./src/admin/');

  // Shortcodes
  config.addNunjucksAsyncShortcode('image', require('./src/shortcodes/imageShortcode'));

	const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

	// Returns product categories, sorted by display order
	config.addCollection('productCategories', collection => {
		return sortByDisplayOrder(collection.getFilteredByGlob('./src/*/index.md'));
	});

	// Returns equipmentTypes, sorted by display order
	config.addCollection('equipmentTypes', collection => {
		return sortByDisplayOrder(collection.getFilteredByGlob('./src/equipment/productTypes/*.md'));
	});

	// Returns equipments, sorted by display order
	config.addCollection('equipments', collection => {
		return sortByDisplayOrder(collection.getFilteredByGlob('./src/equipment/products/*.md'));
	});

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "public",
		},
	};
};

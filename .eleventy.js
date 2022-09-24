module.exports = (config) => {

	// Set directories to pass through to the dist folder
	config.addPassthroughCopy("./src/images/");

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
			output: "dist",
		},
	};
};

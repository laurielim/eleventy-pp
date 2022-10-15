module.exports = (config) => {
	config.addWatchTarget("./src/assets/scss/");
  config.addTransform("minify", require("./src/_11ty/transforms/minify"));

	config.addPassthroughCopy('./src/admin/');
	config.addPassthroughCopy('src/_redirects');
	config.addPassthroughCopy('src/assets/brand/');

  // Shortcodes
  config.addNunjucksAsyncShortcode('image', require('./src/_11ty/shortcodes/imageShortcode'));

	const sortByDisplayOrder = require('./src/_11ty/utils/sort-by-display-order.js');

	// Returns equipment categories in english
	config.addCollection('equipmentCategory_en', collection => {
		return collection.getFilteredByGlob('./src/equipment/productCategory/en/*.md');
	});

	// Returns equipment categories in french
	config.addCollection('equipmentCategory_fr', collection => {
		return collection.getFilteredByGlob('./src/equipment/productCategory/fr/*.md');
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

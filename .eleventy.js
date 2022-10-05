module.exports = (config) => {
	config.addWatchTarget("./src/assets/scss/");
  config.addTransform("minify", require("./src/_11ty/transforms/minify"));

	config.addPassthroughCopy('./src/admin/');

  // Shortcodes
  config.addNunjucksAsyncShortcode('image', require('./src/_11ty/shortcodes/imageShortcode'));

	const sortByDisplayOrder = require('./src/_11ty/utils/sort-by-display-order.js');


	// Returns product categories, sorted by display order
	config.addCollection('departments_en', collection => {
		return sortByDisplayOrder(collection.getFilteredByGlob('./src/content/en/*/index.md'));
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

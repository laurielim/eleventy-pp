const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/translations');
const {	fortawesomeFreeRegularPlugin } = require('@vidhill/fortawesome-free-regular-11ty-shortcode');

module.exports = (config) => {
	config.addWatchTarget("./src/assets/scss/");
  config.addTransform("minify", require("./src/_11ty/transforms/minify"));

	config.addPassthroughCopy('./src/admin/');
	config.addPassthroughCopy('./src/_redirects');
	config.addPassthroughCopy('./src/assets/brand/');

	// Filters
  config.addFilter('localeFilter', require('./src/_11ty/filters/localeFilter'));
  config.addFilter('productTypeFilter', require('./src/_11ty/filters/productTypeFilter'));

  // Shortcodes
  config.addNunjucksShortcode('image', require('./src/_11ty/shortcodes/imageShortcode'));

	// Plugin
	config.addPlugin(eleventyNavigationPlugin);
	config.addPlugin(i18n, translations);
	config.addPlugin(fortawesomeFreeRegularPlugin);

	const sortByDisplayOrder = require('./src/_11ty/utils/sort-by-display-order.js');

	// Returns plastic categories in english
	config.addCollection('plasticsCategory_en', collection => {
		return collection.getFilteredByGlob('./src/content/en/plastics/*.md');
	});

	// Returns plastic categories in french
	config.addCollection('plasticsCategory_fr', collection => {
		return collection.getFilteredByGlob('./src/content/fr/plastics/*.md');
	});

	// Returns equipment categories in english
	config.addCollection('equipmentCategory_en', collection => {
		return collection.getFilteredByGlob('./src/equipment/productCategory/en/*.md');
	});

	// Returns equipment categories in french
	config.addCollection('equipmentCategory_fr', collection => {
		return collection.getFilteredByGlob('./src/equipment/productCategory/fr/*.md');
	});

	// Returns equipments in english
	config.addCollection('equipment_en', collection => {
		return collection.getFilteredByGlob('./src/equipment/products/en/*.md');
	});

	// Returns equipments in french
	config.addCollection('equipment_fr', collection => {
		return collection.getFilteredByGlob('./src/equipment/products/fr/*.md');
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

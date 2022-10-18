const slugify = require('slugify')

module.exports = {
  locale: "en",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      url: (data) => `#${slugify(data.title.toLowerCase())}`, // final result - currentPageUrl + url
      parent: data => data.tags[0],
    }
  }
};
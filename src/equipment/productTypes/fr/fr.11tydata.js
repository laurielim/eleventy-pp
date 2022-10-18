module.exports = {
  locale: "fr",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      url: data => `#${data.page.fileSlug}`, // final result - currentPageUrl + url
      parent: data => data.tags[0],
    }
  }
};
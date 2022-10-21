module.exports = {
  locale: "en",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "equipment"
    }
  }
};
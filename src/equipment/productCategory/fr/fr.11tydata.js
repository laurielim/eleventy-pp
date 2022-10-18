module.exports = {
  locale: "fr",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "equipment"
    }
  }
};
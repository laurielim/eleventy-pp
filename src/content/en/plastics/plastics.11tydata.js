module.exports = {
  layout: "layouts/plastics-category.html",
  permalink: "/{{ locale }}/plastics/{{ title | slugify }}/index.html",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "plastics"
    }
  }
};
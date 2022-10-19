module.exports = {
  layout: "layouts/about.html",
  permalink: "/{{ locale }}/plastics/{{ title | slugify }}/index.html",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "plastics"
    }
  }
};
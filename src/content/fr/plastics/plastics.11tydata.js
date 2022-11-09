module.exports = {
  layout: "layouts/plastics-category.html",
  permalink: "/{{ locale }}/plastiques/{{ title | slugify }}/index.html",
  tags: ['plasticCategories_fr'],
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "plastics"
    }
  }
};
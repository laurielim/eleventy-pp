module.exports = {
  layout: "layouts/plastics-category.html",
  permalink: "/{{ locale }}/plastics/{{ title | slugify }}/index.html",
  tags: ['plasticCategories_en'],
  eleventyComputed: {
    metaDesc: data => `Browse the list of ${data.title.toLowerCase()} we have in stock. Available immediate on premises.`,
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "plastics"
    }
  }
};
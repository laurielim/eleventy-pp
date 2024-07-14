module.exports = {
  layout: "layouts/plastics-category.html",
  permalink: "/{{ locale }}/packaging/{{ title | slugify }}/index.html",
  tags: ['plasticCategories_fr'],
  eleventyComputed: {
    metaDesc: data => `Parcourez la liste des ${data.title.toLowerCase()} que nous avons en stock. Disponible immédiatement sur place.`,
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "packaging"
    }
  }
};
module.exports = {
  locale: "fr",
  equipmentCTA: {
    title: "Développons votre entreprise",
    summary: "Travaillons ensemble pour améliorer votre rapidité et votre efficacité de production. Nous accueillons aussi bien les PME que les grandes entreprises.",
    buttonText: "Passer une commande",
    buttonUrl: "tel:+23059316762",
  },
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "equipment"
    }
  }
};
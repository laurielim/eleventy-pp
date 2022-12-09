module.exports = {
  locale: "fr",
  equipmentCTA: {
    title: "Développons votre entreprise",
    summary: "Travaillons ensamble pour améliorer votre rapidité et votre efficacité de production. Nous accueillons aussi bien les PME que les grandes entreprises.",
    buttonText: "Passer une commande",
    buttonUrl: "tel:+230 5931 6762",
  },
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.page.fileSlug,
      title: data => data.title,
      parent: "equipment"
    }
  }
};
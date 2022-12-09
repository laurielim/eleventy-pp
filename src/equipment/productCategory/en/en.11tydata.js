module.exports = {
  locale: "en",
  equipmentCTA: {
    title: "Let's expand your business",
    summary: "Partner with us to improve your production speed and efficiency. We cater equally to SMEs and large corporations.",
    buttonText: "Place an order",
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
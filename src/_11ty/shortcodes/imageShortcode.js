const Image = require('@11ty/eleventy-img');

module.exports = (
  source,
  alt = '',
  isLazy = true,
  className = "image",
  sizes = '100vw',
  ) => {
    // Workaround as Netlify CMS saves image source with a slash
    if (!source) return;
    const src = source.charAt(0) === "/" ? source.substring(1) : source;

    let options = {
      widths: [560, 724, 960],
      formats: ['webp', 'jpeg'],
      outputDir: 'public/assets/images/optimized',
      urlPath: '/assets/images/optimized',
    };

    // generate images, while this is async we don’t wait
    Image(src, options);

    let imageAttributes = {
      class: className,
      alt,
      sizes,
      loading: isLazy? 'lazy' : undefined,
      decoding: 'async',
    };
    // get metadata even the images are not fully generated
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
};
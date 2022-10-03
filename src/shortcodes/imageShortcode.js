const Image = require('@11ty/eleventy-img');
const { outdent } = require('outdent');

module.exports = async (
  src,
  alt = '',
  isLazy = true,
  className = undefined,
  widths = [560, 724, 960],
  formats = ['webp', 'jpeg'],
  sizes = '100vw',
  ) => {
    const imageMetadata = await Image(src, {
      widths: [...widths, null],
      formats: [...formats, null],
      outputDir: 'public/static/images/optimized',
      urlPath: '/static/images/optimized',
    });

  const stringifyAttributes = require('../utils/stringify-attributes');

  // Map each format to the source HTML markup
  const sourceHtmlString = Object.values(imageMetadata).map((images) => {
      // The first entry is representative of all the others since they each have the same shape
      const { sourceType } = images[0];
      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        // srcset needs to be a comma-separated attribute
        srcset: images.map((image) => image.srcset).join(', '),
        sizes,
      });
      // Return one <source> per format
      return `<source ${sourceAttributes}>`;
    }).join('\n');

    const getLargestImage = (format) => {
      const images = imageMetadata[format];
      return images[images.length - 1];
    }

    const largestUnoptimizedImg = getLargestImage(formats[0]);
    const imgAttributes = stringifyAttributes({
      src: largestUnoptimizedImg.url,
      width: largestUnoptimizedImg.width,
      height: largestUnoptimizedImg.height,
      alt,
      loading: isLazy? 'lazy' : undefined,
      decoding: 'async',
    });
    const imgHtmlString = `<img ${imgAttributes}>`;

    const pictureAttributes = stringifyAttributes({
      class: className,
    });

    const picture = `<picture ${pictureAttributes}>
      ${sourceHtmlString}
      ${imgHtmlString}
    </picture>`;

    return outdent`${picture}`;
};
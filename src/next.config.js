const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production'

module.exports = 

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/abhisheksy.github.io/_next/static/images/',
  }],
  {
	  // Use the CDN in production and localhost for development.
	  // assetPrefix: isProd ? 'https://cdn.statically.io/gh/abhisheksy/abhisheksy.github.io/gh-pages/' : '',
	  assetPrefix: '/abhisheksy.github.io/',
	  basePath: '/abhisheksy.github.io',
	  env,
	}
]);
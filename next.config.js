// const withImages = require('next-images');
const webpack = require('webpack')
const { parsed: localEnv } = require('dotenv').config()
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    if (!isServer) {
        config.node = {
            fs: 'empty'
        }
    }
    const nextCssLoaders = config.module.rules.find(
      rule => typeof rule.oneOf === 'object'
    );
    nextCssLoaders.oneOf.forEach(loader => {
      if (
        loader.sideEffects &&
        loader.issuer &&
        loader.issuer.and &&
        loader.issuer.and.length &&
        loader.issuer.and[0].endsWith('_app.js')
      ) {
        delete loader.issuer;
      }
    });
    return config;
  },
};
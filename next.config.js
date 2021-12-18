const withImages = require('next-images');
// const createEnvFile = require('./environment-builder');

module.exports = withImages({
  reactStrictMode: true,
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['rsdias-storage.s3.amazonaws.com', 'i.scdn.co'],
  },
  webpack(config, options) {
    // createEnvFile();
    return config;
  },
});

const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI,
  },
  images: {
    domains: ['rsdias-storage.s3.amazonaws.com', 'i.scdn.co'],
  },
  webpack(config, options) {
    return config;
  },
});

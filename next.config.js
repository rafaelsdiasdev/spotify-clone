const withImages = require('next-images');
module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['rsdias-storage.s3.amazonaws.com', 'i.scdn.co'],
  },
  webpack(config, options) {
    return config;
  },
});

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['rsdias-storage.s3.amazonaws.com', 'i.scdn.co'],
//   },
// };

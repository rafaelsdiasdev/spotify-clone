module.exports = {
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  reactStrictMode: true,
  target: 'server',
  env: {
    API_URL: process.env.API_URL,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI,
  },
  images: {
    domains: ['rsdias-storage.s3.amazonaws.com', 'i.scdn.co'],
  },
  webpack5: true,
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      module: false,
      stream: require.resolve('stream-browserify'),
      constants: require.resolve('constants-browserify'),
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

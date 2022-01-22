module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../stories/**/*.stories.mdx',
    '../components/**/**/*.stories.@(js|mdx)',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
  ],

  webpackFinal: (config) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    console.log(rules);

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

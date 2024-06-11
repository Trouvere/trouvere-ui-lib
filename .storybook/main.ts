import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support CSS Modules
          {
            test: /\.s?[ac]ss$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    auto: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
              }
            ],
          }
        ]
      }
    },
    // "storybook-css-modules",

  ],
  // webpackFinal: (config) => {
  //   config.resolve.modules = [...(config.resolve.modules || []), "./src"];
  //   config.module.rules = [
  //     ...(config.module.rules || []),
  //     {
  //       test: /\.svg$/i,
  //       issuer: /\.[jt]sx?$/,
  //       type: "javascript/auto",
  //       use: [{loader: '@svgr/webpack', options: {icon: true}}, 'url-loader'],
  //     },
  //   ];
  //   return config;
  // },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;

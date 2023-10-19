module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-controls/register'],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};
module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-controls/register'],
  core: {
    builder: "webpack5"
  }
};
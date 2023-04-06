module.exports = {
  transform: {
    '\\.jsx$': '<rootDir>/node_modules/babel-jest',
  },
  setupFiles: ['./setupTests.js'],
  verbose: true,
};

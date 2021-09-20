// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**/*.spec.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/index.js', '*.e2e.test.js'],
  coverageReporters: ['json', 'html'],
};

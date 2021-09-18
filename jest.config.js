// jest.config.js
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/**/*.test.js'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src/index.js',
    ],
    coverageReporters: ['json', 'html'],
};

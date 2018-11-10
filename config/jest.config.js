module.exports = {
  rootDir: '../',
  testURL: 'http://localhost/',
  globals: { },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coverageReporters: ['html'],
  testMatch: ['<rootDir>/src/**/__tests__/*.js', '<rootDir>/src/**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/lib',
    '<rootDir>/coverage',
    '<rootDir>/node_modules'
  ]
}

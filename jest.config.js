module.exports = {
  bail: true,
  clearMocks: true,
  coverageDirectory: '__tests__/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],
  // preset: 'jest-puppeteer',
  transform: { '\\.ts$': ['ts-jest'] },
  // roots: [
  //   '<rootDir>/src'
  // ],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  verbose: true
}

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Explicitly specify the jsdom environment
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Support for `@/` path alias
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'], // Setup file for custom configurations
};
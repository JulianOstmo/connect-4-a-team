import { defaults } from 'jest-config';

const config = {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'feature'],
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testMatch: [...defaults.testMatch, '**/*_steps.(ts|js)'],
};

export default config;

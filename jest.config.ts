import { defaults } from 'jest-config';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
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
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testMatch: [...defaults.testMatch, '**/*_steps.(ts|js)'],
};

export default jestConfig;

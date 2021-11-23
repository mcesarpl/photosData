/* eslint-disable @typescript-eslint/no-var-requires */

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.path, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testRegex: '\\.(int|e2e)\\.spec\\.ts$',
  maxWorkers: 1,
  testTimeout: 8000,
};

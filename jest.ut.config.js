// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testRegex: '^(?!.*(e2e|int)\\.spec\\.ts$).*\\.spec\\.ts$',
};

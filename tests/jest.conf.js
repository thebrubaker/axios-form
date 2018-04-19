const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  setupFiles: ['<rootDir>/tests/setup'],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverageFrom: ['src/**/*.{js}', '!**/node_modules/**']
}

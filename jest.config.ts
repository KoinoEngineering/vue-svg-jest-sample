module.exports = () => {
  return {
    moduleNameMapper: {
      '^@/(.*\\.svg)\\?inline$': '<rootDir>/$1',
      '^~/(.*\\.svg)\\?inline$': '<rootDir>/$1',
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1',
      '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: [
      'ts',
      'js',
      'vue',
      'json'
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest',
      '^.+\\.svg$': '<rootDir>/test/testUtils/svgTransform.js'
    },
    coverageReporters: ['json', 'html']
  }
}

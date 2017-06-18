module.exports = {
  extends: ['standard', 'standard-react'],
  plugins: [
    'standard'
  ],
  rules: {
    'prefer-const': 'error',
    camelcase: 0,
    'no-alert': 'error',
    'no-console': ['error', {allow: ['clear']}]
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  }
}

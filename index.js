module.exports = {
  extends: 'standard',
  plugins: [
    'standard'
  ],
  rules: {
    'prefer-const': 'error',
    camelcase: 0,
    'no-alert': 'error',
    'no-console': ['error', {allow: ['clear']}]
  }
}

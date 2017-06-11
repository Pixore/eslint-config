module.exports = {
  extends: 'standard',
  plugins: [
    'standard'
  ],
  rules: {
    camelcase: 0,
    'no-alert': 'error',
    'no-console': ['error', {allow: ['clear']}]
  }
}

module.exports = {
  extends: ['standard', 'standard-react'],
  plugins: [
    'standard'
  ],
  rules: {
    'prefer-const': 'error',
    camelcase: 0,
    'no-alert': 'error',
    'no-console': ['error', {allow: ['clear']}],
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/jsx-max-props-per-line': ['error', {
      maximum: 3
    }],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  }
}

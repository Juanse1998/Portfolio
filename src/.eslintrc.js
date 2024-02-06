module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'prefer-template': 0,
    'react/no-children-prop': [0],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    'linebreak-style': 0
  },
};
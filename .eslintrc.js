module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    es6: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-shadow": "error",
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.tsx']
    }]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: "detect"
    }
  }
};
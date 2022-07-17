module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y', 'no-relative-import-paths', 'import'],
  rules: {
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external', 
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { "allowSameFolder": true }
    ],
    "sort-imports": 
    [
      "error", 
      { 
        ignoreCase: false, 
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-shadow": "error",
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.tsx']
    }],
    "no-undef": "off",
    "import/no-named-as-default-member": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        paths: ["src"]
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      }
    },
    react: {
      version: "detect"
    }
  }
};
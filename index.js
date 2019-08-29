const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'eslint-plugin-react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'global-require': OFF,
    'max-len': ['error', 120],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-unused-vars': OFF,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/explicit-member-accessibility': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/no-empty-interface': OFF,
    '@typescript-eslint/no-explicit-any': ERROR,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react-native/no-unused-styles': ERROR,
    'react-native/split-platform-components': ERROR,
    'react-native/no-inline-styles': OFF,
    'react-native/no-color-literals': OFF,
    'react-native/no-raw-text': OFF,
    'import/no-extraneous-dependencies': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        proseWrap: 'always',
        tabWidth: ERROR,
        printWidth: 80,
        jsxSingleQuote: true,
        jsxBracketSameLine: true,
      },
    ],
  },
};

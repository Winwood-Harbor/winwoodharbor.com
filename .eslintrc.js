module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '**/tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    'prettier',
    'jsx-expressions'
  ],
  ignorePatterns: [
    'build/*',
    'public/*',
    'coverage/*',
    '**/*.log',
    '**/*.lock',
    '**/*.svg',
    '**/*.css',
    'junit.xml',
    '**/node_modules/*',
    '.eslintrc.js',
    'jest.config.js',
    'package-lock.json',
    'package.json',
    'tsconfig.json',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 1 } ],
    'no-constant-binary-expression': [ 'error' ],
    'jsx-expressions/strict-logical-expressions': [ 'error' ],
    'import/no-unused-modules': [ 'warn', { unusedExports: true } ],
    'react/no-unused-prop-types': [ 'warn' ],
  },
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        'no-undef': 'off',
        'multiline-ternary': 'off',
        'indent': 'off',
        'space-before-function-paren': 'off',
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
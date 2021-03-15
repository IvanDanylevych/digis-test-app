module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'react-hooks', 'jest'],
  overrides: [
    {
      files: ['src/**/*.js'],
      excludedFiles: ['src/api/**/*'],
    },
  ],
  settings: {
    react: {
      version: "detect",
    }
  },
  // add your custom rules here
  rules: {
    'prettier/prettier': 'warn',
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};

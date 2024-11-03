module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "semi": ["warn", "always"],
    "indent": ["warn", 2],
    "class-methods-use-this": "warn",
    "eol-last": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-unused-expressions": ["warn"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-trailing-spaces": ["warn"]
  },
};

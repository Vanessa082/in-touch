module.exports = {
  root: true,
  parseOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ],
  rules: {
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "semi": ["warn", "always"],
    "indent": ["warn", 2],
    "class-methods-use-this": "warn",
    "eol-last": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-unused-expressions": ["warn"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-trailing-spaces": ["warn"],
    "no-useless-constructor": 0,
    "no-loop-func": 0,
  }
}

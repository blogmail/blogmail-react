module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "capitalized-comments": "off",
    "prettier/prettier": "error",
  },
  env: {
    jest: true,
    node: true,
  },
};

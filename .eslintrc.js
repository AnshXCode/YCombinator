module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    ".github/",
    "editor/",
    "public/",
    ".next/",
    "out/",
    "coverage/",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "max-len": ["error", 300],
    "linebreak-style": "off",
    "require-jsdoc": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": "off",
    "comma-dangle": "off",
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "no-unused-vars": "off",
    "camelcase": "off",
    "no-undef": "off",
    "no-useless-escape": "off",
    "no-empty": "off",

    // Style rules
    "keyword-spacing": ["error", { before: true, after: true }],
    "space-in-parens": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": ["error", "always"],
    "no-multi-spaces": "error",
  },
};

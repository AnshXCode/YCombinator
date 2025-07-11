// eslint.config.js

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

// ⛳ Required for resolving paths in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 🔁 Enables support for older-style ESLint plugins (e.g., "extends")
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// 🔧 Base config
const eslintConfig = [
  // 🔁 Next.js + TypeScript compatibility layer
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ JavaScript + JSX file targeting
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },

  // ✅ Global linting behavior
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    ignores: [
      "node_modules",
      "dist",
      "/build",
      "/.github",
      "/editor",
      "/public",
    ],
  },

  // ✅ ESLint and React recommended configs
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // ✅ Custom rules
  {
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

      // ✅ Style rules
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-in-parens": ["error", "never"],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "never"],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "block-spacing": ["error", "always"],
      "no-multi-spaces": "error"
    },

    settings: {
      react: {
        createClass: "createReactClass",
        pragma: "React",
        fragment: "Fragment",
        version: "detect",
        flowVersion: "0.53",
      },
    },
  },

  // ✅ ESLint config file-specific rules (Node-style globals)
  {
    files: [".eslintrc.{js,cjs}"],
    languageOptions: {
      sourceType: "script",
      globals: globals.node,
    },
  },
];


export default eslintConfig;

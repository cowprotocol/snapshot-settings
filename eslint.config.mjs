import js from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettier,
  {
    languageOptions: {
      globals: globals.nodeBuiltin,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
];

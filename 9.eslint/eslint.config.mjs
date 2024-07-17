/*
  https://eslint.org/docs/latest/rules/
  https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md
*/

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: "error",
    }
  },
  pluginJs.configs.recommended,
];
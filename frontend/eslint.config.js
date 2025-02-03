import globals from 'globals';
import js from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
// TODO: Install eslint-plugin-react-hooks when https://github.com/facebook/react/issues/28313 is resolved

export default [
  js.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    settings: { react: { version: 'detect' } },
  },
];

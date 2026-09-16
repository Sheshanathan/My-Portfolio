import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'coverage'] },
  {
    files: ['src/**/*.{js,jsx}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    ...reactHooks.configs.flat['recommended-latest'],
    files: ['src/**/*.{js,jsx}'],
  },
  {
    ...reactRefresh.configs.vite,
    files: ['src/**/*.jsx'],
    rules: {
      ...reactRefresh.configs.vite.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true, allowCompoundComponents: true, allowExportNames: ['useToast'] }],
    },
  },
]

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Add these rules to make TypeScript less strict
      '@typescript-eslint/no-unused-vars': 'warn', // Downgrade from error to warning
      '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Don't require explicit return types
      '@typescript-eslint/no-empty-function': 'off', // Allow empty functions
      '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-ignore and other comments
      '@typescript-eslint/no-non-null-assertion': 'off', // Allow non-null assertions (!)
      '@typescript-eslint/no-empty-interface': 'off', // Allow empty interfaces
      '@typescript-eslint/ban-types': 'warn', // Downgrade ban-types to warning
    },
  },
)
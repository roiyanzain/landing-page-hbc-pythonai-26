module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-refresh': require('eslint-plugin-react-refresh'),
    },
    rules: {
      ...require('eslint-plugin-react').configs.recommended.rules,
      ...require('globals').browser,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

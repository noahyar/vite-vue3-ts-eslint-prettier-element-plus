module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': import.meta.VITE_BASE_ENV === 'devlopment' ? 0 : 1,
    'no-debugger': import.meta.VITE_BASE_ENV === 'devlopment' ? 0 : 1,
    'vue/multi-word-component-names': 0, // vue组件必须使用多个文件名
    'vue/no-multiple-template-root': 0, // vue3可以使用多个根组件
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.tsx'] // 可忽略的后缀名
      }
    }
  }
}

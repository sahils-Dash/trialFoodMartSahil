// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt([eslintPluginPrettierRecommended])
module.exports = {
  rules: {
    indent: 'off',
    'vue/html-indent': 'off',
    'vue/script-indent': 'off'
  }
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/prettier",
    "./.eslintrc-auto-import.json",
  ],
  rules: {
    "vue/no-multiple-template-root": "off",
  },
};

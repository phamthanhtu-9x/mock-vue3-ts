import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended
});

export default [
  'eslint:recommended',
  ...compat.config({
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:tailwindcss/recommended', 'prettier'],
    rules: {
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/component-api-style': [
        'error',
        ['script-setup', 'composition', 'options'],
      ],
      'vue/component-name-in-template-casing': 'error',
      'vue/block-lang': [
        'error',
        {
          script: { lang: ['ts', 'js'] },
        },
      ],
      'vue/define-macros-order': [
        'warn',
        {
          order: ['defineProps', 'defineEmits'],
        },
      ],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/match-component-import-name': 'error',
      'vue/no-ref-object-destructure': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-tags': 'warn',
      'vue/prefer-separate-static-class': 'off',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/no-v-html': 'off',
      'vue/no-reserved-component-names': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      //'no-console': ['warn'],
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-contradicting-classname': 'warn',
      'no-extra-boolean-cast': 'off',
    },
    ignorePatterns: ['*.d.ts'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  }),
  {
    rules: {
      camelcase: ['error', { ignoreDestructuring: true }],
    },
  },
]

// export default [{

// }];

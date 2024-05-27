export const env = {
  es6: true,
  node: true,
}
export default { extends: ['prettier'] }
export const plugins = ['prettier']
export const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
}
export const parserOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
}
export const rules = {
  'prettier/prettier': 'error',
  'class-methods-use-this': 'off',
  'no-param-reassign': 'off',
  camelcase: 'off',
  'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
}

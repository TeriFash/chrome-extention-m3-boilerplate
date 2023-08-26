module.exports = {
  importOrderParserPlugins: ['typescript', 'jsx', 'classProperties', 'decorators-legacy'],
  importOrder: [
    '^react.*$',
    '<THIRD_PARTY_MODULES>',
    '^[./][^.]*$', // exclude assets, e.g. '.pcss'
    '[.](p)css$', // includes assets, e.g. '.pcss'
  ],
  'arrowParens': 'always',
  'bracketSameLine': false,
  'bracketSpacing': true,
  'embeddedLanguageFormatting': 'auto',
  'htmlWhitespaceSensitivity': 'css',
  'insertPragma': false,
  'jsxSingleQuote': false,
  'printWidth': 100,
  'proseWrap': 'preserve',
  'quoteProps': 'as-needed',
  'requirePragma': false,
  'semi': true,
  'singleQuote': true,
  'tabWidth': 4,
  'trailingComma': 'all',
  'useTabs': false,
  'vueIndentScriptAndStyle': false
}
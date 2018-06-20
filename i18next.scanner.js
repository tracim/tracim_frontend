const translation = require('./src/translate/fr.js')


const scanner = require('i18next-scanner');
const vfs = require('vinyl-fs');
const options = {
  // See options at https://github.com/i18next/i18next-scanner#options
  func: {
    list: ['t', 'props.t']
  },
  fallbackLng: 'fr',
  // have a common namespace used around the full app
  ns: ['translation'], // namespace
  defaultNS: 'translation',
  debug: true,
  // interpolation: {
  //   escapeValue: false, // not needed for react!!
  // },
  react: {
    wait: true
  },
  resource: { // this seems to not work
    // fr: {
    //   translation: translation.fr.translation
    // },
    loadPath: './src/translate/fr.json'
  }
};
vfs.src(['./src/**/*.jsx'])
  .pipe(scanner(options))
  .pipe(vfs.dest('./118n.scanner'))


console.log(translation)
/*
const fs = require('fs');
const Parser = require('i18next-scanner').Parser;

const customHandler = function(key) {
  const defaultValue = '__TRANSLATION_IS_MISSING__'; // optional default value
  parser.set(key, defaultValue);
  console.log(key)
};

const parser = new Parser();
let content = '';

// Parse Translation Function
// i18next.t('key');
content = fs.readFileSync('./src/component/Footer.jsx', 'utf-8');
parser.parseFuncFromString(content, { list: ['t']}, customHandler)

// Parse HTML Attribute
// <div data-i18n="key"></div>
// content = fs.readFileSync('/path/to/index.html', 'utf-8');
// parser
//   .parseAttrFromString(content, customHandler) // pass a custom handler
//   .parseAttrFromString(content, { list: ['data-i18n'] }) // override `attr.list`
//   .parseAttrFromString(content, { list: ['data-i18n'] }, customHandler)
//   .parseAttrFromString(content); // using default options and handler

console.log(parser.get());
*/

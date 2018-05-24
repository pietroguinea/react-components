const path = require('path')
const fs = require('fs')

module.exports = {
  title: 'Accurat React Components',
  template: () => fs.readFileSync('src/index.html', 'utf-8'),
  showCode: true,
  editorConfig: {
    theme: 'oceanic-next',
  },
  theme: {
    color: {},
    fontFamily: {
      base: '"Roboto"',
      monospace: '"Roboto Mono", monospace',
    },
  },
  styleguideDir: 'docs',
  require: ['tachyons', 'tachyons-extra', path.join(__dirname, 'src/style.css')],
}

const path = require('path')
const { buildWebpackConfig } = require('webpack-preset-accurapp')
const { env, setOutput, customConfig } = require('webpack-blocks')

module.exports = buildWebpackConfig([
  env('production', [
    setOutput({
      path: path.resolve('./lib'),
      filename: 'react-components.js',
      libraryTarget: 'commonjs2',
    }),
  ]),
  customConfig({
    externals: {
      classnames: 'classnames',
      react: 'react',
      'react-dom': 'react-dom',
      tachyons: 'tachyons',
      'tachyons-extra': 'tachyons-extra',
    },
    optimization: {
      splitChunks: false,
      sideEffects: false,
    },
  }),
])

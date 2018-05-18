const path = require('path')
const { buildWebpackConfig } = require('webpack-preset-accurapp')
const { env, setOutput, customConfig } = require('webpack-blocks')
const npmModulesExternals = require('webpack-node-externals')

module.exports = buildWebpackConfig([
  env('production', [
    setOutput({
      path: path.resolve('./lib'),
      filename: 'react-components.js',
      libraryTarget: 'commonjs2',
    }),
    customConfig({
      externals: [npmModulesExternals()],
    }),
  ]),
])

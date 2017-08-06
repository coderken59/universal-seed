const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');

module.exports = function (options, webpackOptions) {
  options = options || {};

  return [{
    entry: root('./server/main.server.ts'),
    context: root('./src'),
    target: 'node',
    devtool: 'source-map',
    output: {
      path: root('dist'),
      filename: 'server.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: '@ngtools/webpack' },
        { test: /\.css$/, loader: 'raw-loader' },
        { test: /\.html$/, loader: 'raw-loader' }
      ]
    },
    plugins: [
      new AotPlugin({
        tsConfigPath: root('./src/tsconfig.server.json'),
        skipCodeGeneration: false
      })
    ]
  }];
}



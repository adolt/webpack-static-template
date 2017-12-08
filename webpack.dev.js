const webpack = require('webpack');
const ReloadPlugin = require('reload-html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 80
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReloadPlugin()
  ],
  output: {
    publicPath: '/'
  }
});

const merge = require('webpack-merge');
const base = require('./webpack.base');
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

module.exports = merge(base, {
  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ],
  output: {
    publicPath:
      'http://cloudresource-1251063063.file.myqcloud.com/officialweb-v2/'
  }
});

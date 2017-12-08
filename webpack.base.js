const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor.js'),
    home: path.resolve(__dirname, 'src/js/home.js'),
    membership: path.resolve(__dirname, 'src/js/membership.js'),
    changelog: path.resolve(__dirname, 'src/js/changelog.js')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, url: true } },
            { loader: 'postcss-loader' }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['vendor', 'home']
    }),
    new HtmlWebpackPlugin({
      filename: 'membership.html',
      template: './membership.html',
      chunks: ['vendor', 'membership']
    }),
    new HtmlWebpackPlugin({
      filename: 'changelog.html',
      template: './changelog.html',
      chunks: ['vendor', 'changelog']
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
    }),
    new ExtractTextPlugin({
      filename: '[name].min.css'
    })
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/')
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  }
};

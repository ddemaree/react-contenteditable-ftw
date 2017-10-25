const webpack = require('webpack')

const isProd = (process.env.NODE_ENV === 'production')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'assets/[name].js',
    path: './build',
    publicPath: '/',
    pathinfo: true
  }
}
const path = require('path')

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const isDev = process.argv.indexOf('--develop') >= 0
const isWatch = process.argv.indexOf('--watch') >= 0
const demoSrc = path.resolve(__dirname, './demo')
const demoDist = path.resolve(__dirname, '../miniprogram_dev')
const src = path.resolve(__dirname, '../src')
const dev = path.join(demoDist, 'components')
const dist = path.resolve(__dirname, '../miniprogram_dist')

module.exports = {
  entry: [
    'button/index',
    'icon/index',
    'cell/index',
    'cell-group/index',
    'grid/index',
    'grid-item/index',

    'message/index',
    'message/message',
    'toast/index',
    'toast/toast',
    'action-sheet/index',
    'modal/index',
    'modal/modal',
    'spinner/index',
    'drawer/index',
    'swipeout/index',

    'tag/index',
    'badge/index',
    'collapse/index',
    'progress/index',
    'divider/index',
    'loadmore/index',
    'timeline/index',
    'timeline-item/index',

    'header-bar/index',
    'navbar/index',
    'navbar-group/index',
    'notice-bar/index',
    'sticky/index',
    'sticky-item/index',
    'index/index',
    'index-item/index',
    'sticky-button/index',
    'sticky-button-item/index',

    'slider/index',
    'radio/index',
    'radio-group/index',
    'checkbox/index',
    'checkbox-group/index',
    'switch/index',
    'rate/index',
    'transition/index',
    'can-use-sticky/index'
  ],

  isDev,
  isWatch,
  srcPath: src, // 源目录
  distPath: isDev ? dev : dist, // 目标目录

  demoSrc, // demo 源目录
  demoDist, // demo 目标目录

  wxss: {
    less: false, // 使用 less 来编写 wxss
    sourcemap: false, // 生成 less sourcemap
  },

  js: {
    webpack: true, // 使用 webpack 来构建 js
  },

  webpack: {
    mode: 'production',
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: [nodeExternals()], // 忽略 node_modules
    module: {
      rules: [{
        test: /\.js$/i,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }],
        exclude: /node_modules/
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }, {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            happyPackMode: true,
          },
        }],
      }],
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: ['.js', '.json'],
    },
    plugins: [
      new webpack.DefinePlugin({}),
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ],
    optimization: {
      minimize: false,
    },
    devtool: 'source-map', // 生成 js sourcemap
    performance: {
      hints: 'warning',
      assetFilter: assetFilename => assetFilename.endsWith('.js')
    }
  },

  copy: ['./assets', './utils'], // 将会复制到目标目录
}

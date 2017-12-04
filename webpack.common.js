const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: ["babel-polyfill",'./src/main.js']
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin("static/css/[name].[hash].css")
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].js'
  },
  devServer: {
    // outputPath: path.join(__dirname, 'dist'),
    // contentBase: path.join(__dirname, 'dist'),
    contentBase:'src',
    historyApiFallback:true,
    hot:true,
    progress:true,
    open: true,
    port: 8082,
    stats:{
        chunks: false
    },
    // distoryApiFallback: true,
    inline: true,//不使用inline模式，inline模式一般用于单页面应用开发，会自动将socket注入页面代码中
    // proxy: {
    //  "/api": {
    //     target: "http://10.10.1.14"
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   },
    // }
  },
  resolve: {
    // root: './app',
    alias: { 
      node_modules: __dirname + '/node_modules',
      style: __dirname + '/src/style',
      pages: __dirname + '/src/pages',
      common: __dirname + '/src/js/common'
    }
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test:/\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test:/\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: 'static/img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  }
};
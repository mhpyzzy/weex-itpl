/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 开发调试，只构建h5端调试界面，
 *              native端调试 直接用 weex-previewer  xxx.vue
 * 
 *---------------------------------------------------------
 */


const path = require('path');
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const ip = require('ip').address();
const qrcode = require('qrcode-terminal');
//h5dev用
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

//native 入口文件
const entry_Native = require('./build_entry')('views')

// const express = require("express");
// const opn = require('opn')

const devWebConfig = merge(baseConfig,{
    entry:{
      "index":[
        // path.resolve(__dirname,'../src/render.js'),
        path.resolve(__dirname,'../src/entry.js')
      ]
    },
    output: {
      path: path.resolve(__dirname, '../dist/web'),
      filename: '[name].js',
    },
    externals: {},
    module:{
      rules:[
        {
          test: /\.vue(\?[^?]+)?$/,
          use: [{
            loader: 'vue-loader',
            options:{
              compilerModules: [
                {
                  postTransformNode: el => {
                    el.staticStyle = `$processStyle(${el.staticStyle})`
                    el.styleBinding = `$processStyle(${el.styleBinding})`
                  }
                }
              ]
            }
          }]
        }
      ]
    },
    plugins: [
    //   new webpack.NamedModulesPlugin(),
    //   new webpack.optimize.OccurrenceOrderPlugin(),
    //   new webpack.NoEmitOnErrorsPlugin(),
    //   new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          IP: JSON.stringify(require('ip').address()),
          COMPILE_ENV: '"vue"'
        }
      }),
      new FriendlyErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'park',
        filename: 'index.html',
        template: path.join(__dirname,'../web/index.dev.html'),
        isDevServer: true,
        chunksSortMode: 'dependency',
        inject: 'head'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
    //   new webpack.ProvidePlugin({
    //     Vue: 'vue/dist/vue.runtime.js'
    //   })
    ],
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: '8080',
        historyApiFallback: true,
        public: ip + ':8080',
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        },
        // proxy:{
        //   '/api':{
        //     target:'http://xxx.xxx.com/',
        //     changeOrigin:true
        //   }
        // }
      }
})

qrcode.generate(`http://${ip}:8080`)

module.exports = devWebConfig
/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 构建打包，native(多页面) 端js和 h5端(单页面)
 * 
 *---------------------------------------------------------
 */


require('shelljs/global')
const path = require('path')
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

//h5dev用
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// 先删除dist目录下的文件
rm('-rf', path.resolve(__dirname, '../dist'))

//native 入口文件
const entry_Native = require('./build_entry')('views')
// const express = require("express");

const devWebConfig = merge(baseConfig,{
    entry:{
      "index":[
        // path.resolve(__dirname,'../src/render.js'),
        path.resolve(__dirname,'../src/entry.js')
      ]
    },
    output: {
      path: path.resolve(__dirname, '../dist/web'),
      filename: '[name].[hash].js',
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
      // new webpack.NamedModulesPlugin(),
      // new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
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
        template: path.join(__dirname,'../index.html'),
        isDevServer: true,
        chunksSortMode: 'dependency',
        inject: 'head'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      // new webpack.ProvidePlugin({
      //   Vue: 'vue/dist/vue.runtime.js'
      // })
    ]
    })

    //native配置
const devNativeConfig = merge(baseConfig,{
    entry:entry_Native,
    output:{
        path:path.resolve(__dirname, '../dist/native'),
        filename: '[name].js',
    },
    module:{
      rules: [
        {
          test: /\.vue(\?[^?]+)?$/,
          use: [{
            loader: 'weex-loader'
          }]
        },
      ],
    },
    // externals: {
    //   'vue': 'Vue',
    //   'weex-vue-render': 'weexVueRenderer'
    // },
    plugins:[
      new webpack.DefinePlugin({
        'process.env': {
          IP: JSON.stringify(require('ip').address()),
          COMPILE_ENV: '"weex"'
        }
      }),
    ]
  })


  module.exports = [devWebConfig, devNativeConfig]
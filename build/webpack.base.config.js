/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 基本配置文件
 * 
 *---------------------------------------------------------
 */



const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copy = require('copy-webpack-plugin')

const resolve = (dir)=>{
   return path.resolve(__dirname, '../src',dir)
}

// 插件列表
const plugins = [
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.BannerPlugin({
      banner: '// { "framework": "Vue"} \n',
      raw: true,
      exclude: 'Vue'
    }),
    //  文件拷贝插件,将图片和字体拷贝到dist目录
    new copy([
        {from: path.join(__dirname,'../src/assets/img'), to: "./img"},
        {from: path.join(__dirname,'../src/assets/font'), to: "./font"},
        {from: path.join(__dirname,'../node_modules/vue/dist'), to: "./library/vue"},
        {from: path.join(__dirname,'../node_modules/weex-vue-render/dist'), to: "./library/weex-vue-render"},
        {from: path.join(__dirname,'../web/plugin.js'), to: "./library/plugin"},
    ])
  ];


module.exports = {
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.js',
            'assets': resolve('assets'),
            'constants': resolve('constants'),
            'components': resolve('components'),
            'api': resolve('api'),
            'router': resolve('router'),
            'store': resolve('store'),
            'views': resolve('views'),
            'mixins': resolve('mixins'),
            'utils': resolve('utils')
          }
    },
    module:{
        rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },{
                test: /\.scss$/,
                loader: 'style!css!sass'
            },{
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: 'images/[hash:8].[name].[ext]'
                }
            },{
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: 'fonts/[hash:8].[name].[ext]'
                }
            }
          ]
    },
    // vue: {},
    plugins: plugins
}

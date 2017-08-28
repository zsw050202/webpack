/**
 * Created by Administrator on 2017/8/23.
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'http://localhost:8080/',   // 发布到的服务器地址根目录
    },
    plugins: [
        new htmlWebpackPlugin({template: 'index.html'}),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    devtool: 'inline-source-map', // 开发环境配置 source-map 控制台打印出错误的源码位置
    devServer: {
        contentBase: './dist',     // 监听 dist 文件夹在文件的变化
        hot: true
    },
    module: {
         rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,   // 不会编译 node_modules 中的 js 文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                query: {
                    name: 'images/[name]-[hash:5].[ext]'
                }
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
};
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const basejs = require('./webpack.base.js');


module.exports = merge(basejs, {
    plugins: [
        
    ],
    devServer: {
        //开发模式下的代理
        // proxy: {
        //     '/categories': {
        //         target: 'https://api2.qingting.fm/v6/media',
        //         changeOrigin: true,
        //         secure: false,
        //         pathRewrite: {
        //             '^/categories': '/categories'
        //         }
        //     }
        // }
    }
});
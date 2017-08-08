const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const basejs = require('./webpack.base.js');


module.exports = merge(basejs, {
    plugins: [
        new webpack.BannerPlugin('This file was created by SecretCastle'),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});
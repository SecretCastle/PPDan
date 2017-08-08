var path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
    return require('./build/webpack.' + env + '.js');
};
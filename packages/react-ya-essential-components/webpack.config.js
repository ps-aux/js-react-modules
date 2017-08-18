/*
* Taken from https://github.com/krasimir/webpack-library-starter
*/

const path = require('path')

const libraryName = require('./package.json').name

const plugins = []

const config = {
    entry: path.resolve(__dirname, 'src/components/index.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '.'),
            path.resolve(__dirname, 'node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
/*            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }   */
        ]
    },
    externals: [
        'react'
    ],

    plugins: plugins
}

module.exports = config

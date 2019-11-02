const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const globalObject = require('webpack-global-object-x');

module.exports = {
    output: {
        globalObject: '(' + globalObject.toString() + '())',
        filename: 'dota2-heroes.umd.js',
        libraryTarget: 'umd',
        library: 'dota2heroes'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin()
    ]
};

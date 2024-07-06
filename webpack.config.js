const globalObject = require('webpack-global-object-x');

module.exports = {
    output: {
        globalObject: '(' + globalObject.toString() + '())',
        filename: 'dota2-heroes.umd.js',
        library: {
            name: 'dota2heroes',
            type: 'umd'
        },
        clean: true
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    devtool: 'source-map',
};

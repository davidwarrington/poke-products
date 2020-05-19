const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.json',
            '.vue'
        ]
    },
    externals: [new nodeExternals()]
}

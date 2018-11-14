const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.FLUENTFFMPEG_COV': false
        })
    ],
    externals: [
        "@ffmpeg-installer/ffmpeg",
        "fluent-ffmpeg"
    ],
    target: "node",
    node: {
        'child_process': "empty",
        fs: "empty"
    }
};
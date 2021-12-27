const path = require ('path');
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const {Howl, Howler} = require('howler');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.mp3$/i,
                use: ['file-loader'],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new CopyWebpackPlugin ({
            patterns: [{
                from: path.resolve(__dirname, 'src'),
                to: path.resolve(__dirname, 'dist')
            }]
        })
        // new BundleAnalyzerPlugin
    ],
    devServer: {
        port: 8080,
        static: './dist',
        hot: true
    }
}
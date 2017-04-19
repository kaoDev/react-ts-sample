const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill', 'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js', publicPath: '/static/' },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss', '.css'],
        modules: ['node_modules', path.resolve(__dirname, './src')]
    },

    plugins: [
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
            { name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify('development') }
        }),
        postcssImport,
        postcssCssNext,
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules|__tests__)/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015', 'react'] }
            },
            {
                test: /(\.scss|\.css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    "postcss-loader"
                ]
            }
        ]
    }
};

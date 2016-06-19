var webpack = require("webpack");
var path = require("path");
module.exports = {
    debug: true,
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.tsx'
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: 'dist/bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "resolve-url", "sass?sourceComments"]
            },
            {
                test: /\.json/,
                loaders: ["json-loader"]
            },
            {
                test: /\.png/,
                loader: 'ignore-loader'
            },
            {
                test: /\es6.js(x?)$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot',
                    'babel',
                    'ts-loader'
                ]
            },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {
        root: [path.resolve('./src')],
        extensions: ['', '.ts', '.tsx', '.js'],
        modulesDirectories: ["node_modules"]
    },
    externals: {

    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
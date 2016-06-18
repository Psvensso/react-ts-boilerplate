var webpack = require('webpack');
var path = require("path");
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        "./src/index"
    ],
    target: 'web',
    output: {
        path: path.resolve("./"),
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
                //loaders: ['react-hot', "style", "css?sourceMap", "sass?sourceMap&outputStyle=expanded"]
                loaders: ["style-loader", "css-loader", "resolve-url", "sass?sourceComments"]
            },
            {
                test: /\.json/,
                //loaders: ['react-hot', "style", "css?sourceMap", "sass?sourceMap&outputStyle=expanded"]
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
        extensions: ['', '.ts', '.tsx', '.js'],
        modulesDirectories: ["node_modules"],
        alias: {

        }
    },
    externals: {
        //"react": "React",
        //"react-dom": "ReactDOM",
        //"react-bootstrap": "ReactBootstrap",
        //"react-router": "ReactRouter"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        //new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: { warnings: false } }),
        //new webpack.HotModuleReplacementPlugin()
    ]
}
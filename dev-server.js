var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var wp = webpack(config);

new WebpackDevServer(wp, {
    publicPath: '/',
    hot: true,
    stats: 'errors-only',
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    
    console.log('Listening at http://localhost:3000/');
});
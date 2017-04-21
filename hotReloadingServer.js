const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
});

const address = process.env.IP || "localhost";
const port = process.env.PORT || 3000;

app.listen(port, address, (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Chat server listening at ${address}:${port}`);
});

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
});

app.listen(process.env.PORT || 3000, process.env.IP || "localhost", (err, result) => {
    if (err) {
        return console.log(err);
    }
    const addr = app.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});

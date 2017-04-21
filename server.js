const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

app.listen(process.env.PORT || 3000, process.env.IP || "localhost", (err, result) => {
    if (err) {
        return console.log(err);
    }
    const addr = app.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});

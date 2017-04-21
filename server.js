const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

const address = process.env.IP || "localhost";
const port = process.env.PORT || 3000;

app.listen(port, address, (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Chat server listening at ${address}:${port}`);
});

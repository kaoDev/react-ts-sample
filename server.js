const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

app.listen(3000, () => {
    console.log('running on port 3000');
});
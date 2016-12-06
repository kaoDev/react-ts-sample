const express = require('express')
const app = express()

app.use('/static', express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('running on port 3000')
})
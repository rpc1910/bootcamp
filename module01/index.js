const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Wololo</h1>');
})

server.listen(3000);
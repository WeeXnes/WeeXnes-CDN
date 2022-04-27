const config = require('./config.json')
const express = require('express')
const path = require("path");
const app = express()


app.use(express.static(path.join(__dirname, 'cdn')));


app.listen(config.port)
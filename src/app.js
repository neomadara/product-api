const express = require('express')
const cors = require('cors');
require('./db/connection')
const routeProducts = require('./product/routes')
const app = express()

app.use(cors());
app.use(express.json());

app.use(routeProducts)

module.exports = app;

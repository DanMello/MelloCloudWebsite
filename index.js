const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

//Export Config
const Config = require('./config')(app)

app.config = Config

app.path = path

//Database connection
const knex = require('knex')
const knexSetup = require('./knexfile')[Config.enviroment]

app.db = knex(knexSetup)

//encryption
app.bcrypt = bcrypt

//json web token
app.jwt = jwt

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Pass to next layer of middleware
    next();
})
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json(Config.settings.jsonParser))
app.use(bodyParser.urlencoded(Config.settings.urlencodedParser))

require('./routes')(app)

app.listen(3001)
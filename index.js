const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

//Export Config
const Config = require('./config')(app)

app.config = Config

//Database connection
const knex = require('knex')
const knexSetup = require('./knexfile')[Config.enviroment]

app.db = knex(knexSetup)

//encryption
app.bcrypt = bcrypt

//json web token
app.jwt = jwt

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json(Config.settings.jsonParser))
app.use(bodyParser.urlencoded(Config.settings.urlencodedParser))

require('./routes')(app)

app.listen(3001)
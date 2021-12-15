const express = require('express')
const app = express()
const { body, validationResult } = require('express-validator')

let heroes = require("../users.json")


module.exports = app
const express = require('express')
const app = express()
const { body, validationResult } = require('express-validator')

let users = require("../users.json")

app.get('/', (req, res) => {
    res.json(users)
  })

app.get('/:slug', (req, res) => {
    const { slug } = req.params
    const eachUser = users.find(user => user.slug === slug)
    res.json(eachUser)
})

app.post('/',   
    body('name')
    .exists().withMessage("name is required")
    .isLength({ min: 4 }).withMessage("name is too short"),
    body('passwor')
    .exists().withMessage("passwor is required")
    .isLength({ min: 8 }).withMessage("password is too short"),
    body('city')
    .exists().withMessage("city is required")
    .isIn(["Paris", "Tokyo", "Los Angeles"]).withMessage("city value is not accepted"),


module.exports = app
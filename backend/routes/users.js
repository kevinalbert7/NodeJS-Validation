const express = require('express')
const app = express()
const { validationResult } = require('express-validator')
const validations = require('../middlewares/users')

let users = require('../users.json')

app.get("/", (req, res) => {
    res.json(users)
})

app.get("/:slug", (req, res) => {
    const { slug } = req.params
    const user = users.find(user => user.slug === slug)
    
    if (!user) {
        res.status(404).send('Not found')
    } else {
        res.json(user)
    }
})

app.post("/", validations, (req,res) => {
        const { errors } = validationResult(req)

        if (errors.length > 0) {
            res.status(400).json({ errors })
            console.log(errors)
        } else {
            const user = { 
                slug: req.body.name.toLowerCase(),
                ...req.body
            }
    
            users = [ ...users, user ]
    
            res.json(user)
        }
            
    }
)

module.exports = app
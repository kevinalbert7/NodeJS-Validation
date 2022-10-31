const { body } = require('express-validator')

const validations = [
    body('name')
        .exists().withMessage('username is required')
        .isLength({ min: 4 }).withMessage("name is too short"),
    body('password')
        .exists().withMessage('password is required')
        .isLength({ min: 8 }).withMessage("password is too short"),
    body('city')
        .isIn(["Paris", "Tokyo", "Angeles"]).withMessage("city value is not accepted")
]

module.exports = validations
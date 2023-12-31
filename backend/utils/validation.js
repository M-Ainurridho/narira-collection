const { body, validationResult } = require("express-validator")
const User = require("../models/user-model")

const response = require("./response")
const jwt = require("jsonwebtoken")

module.exports.loginValidation = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Required input email")
        .isEmail()
        .withMessage("Invalid input email"),
    body("password").trim().notEmpty().withMessage("Required input password"),
    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return response(402, "Bad Request", res, error.array())
        }

        next()
    },
]

module.exports.registerValidation = [
    body("fullname").trim().notEmpty().withMessage("Required input fullname"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Required input email")
        .isEmail()
        .withMessage("Invalid input email")
        .custom(async (value) => {
            const user = await User.findOne({ email: value })

            if (user) {
                throw new Error("Email already exist")
            } else {
                return true
            }
        }),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Required input password")
        .isLength({ min: 8 })
        .withMessage("Password too short! min 8 character"),
    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return response(402, "Bad Request", res, error.array())
        }

        next()
    },
]

module.exports.exchangeTokenValidation = async (req, res, next) => {
    const token = req.headers["auth-token"]

    if (token) {
        jwt.verify(token, "wadidaww", (err, decoded) => {
            if (err) return err

            req.params.user_id = decoded._id

            next()
        })
    } else {
        return response(404, "Not Found", res, null)
    }
}

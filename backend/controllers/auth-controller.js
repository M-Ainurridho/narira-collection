const { passwordCompare, passwordHash } = require("../utils/hash")

const User = require("../models/user-model")

const response = require("../utils/response")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user)
            return response(404, "Not Found", res, [
                { path: "email", msg: "Email isn't registered" },
            ])

        if (!user.isActive)
            return response(402, "Bad Request", res, [
                { path: "email", msg: "Activated your email before" },
            ])

        if (!passwordCompare(password, user.password))
            return response(402, "Bad Request", res, [
                { path: "password", msg: "Wrong password" },
            ])

        jwt.sign(
            { _id: user._id },
            "wadidaww",
            { expiresIn: 60 * 60 },
            (err, token) => {
                if (err) return err

                return response(200, "User token", res, token)
            }
        )
    } catch (err) {
        console.error(err)
    }
}

const register = async (req, res) => {
    const { fullname, email, password } = req.body

    try {
        const newUser = await new User({
            name: fullname,
            email,
            password: passwordHash(password),
        }).save()

        return response(200, "Successfully Add New User", res, newUser)
    } catch (err) {
        console.error(err)
    }
}

module.exports = { login, register }

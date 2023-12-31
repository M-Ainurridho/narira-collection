const User = require("../models/user-model")
const response = require("../utils/response")

const getUserById = async (req, res) => {
    const { user_id } = req.params

    try {
        const user = await User.findOne({ _id: user_id })

        return response(200, "Get User By Id", res, user)
    } catch (err) {
        return response(500, "Internal Server Error", res, err)
    }
}

module.exports = { getUserById }

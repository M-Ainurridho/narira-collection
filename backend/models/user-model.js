const { Schema, default: mongoose } = require("mongoose")

const userSchema = new Schema({
    name: String,
    avatar: {
        type: String,
        default: "avatar.jpg",
    },
    email: String,
    password: String,
    role: {
        type: String,
        default: "member",
    },
    isActive: {
        type: Boolean,
        default: false,
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User

const router = require("express").Router()
const { auth, user } = require("../controllers")
const {
    loginValidation,
    registerValidation,
    exchangeTokenValidation,
} = require("../utils/validation")

router.post("/login", loginValidation, auth.login)
router.post("/register", registerValidation, auth.register)
router.post("/exchangetoken", exchangeTokenValidation, user.getUserById)

module.exports = router

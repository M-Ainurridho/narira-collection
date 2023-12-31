const router = require("express").Router()

router.get("/:_id", getUserById)

module.exports = router

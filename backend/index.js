const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

require("dotenv").config()
require("./config/db")

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// port
const PORT = process.env.SERVER_PORT || 3001

// Route
const authRouter = require("./routers/auth-router")

app.use("/auth", authRouter)

// server listen
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})

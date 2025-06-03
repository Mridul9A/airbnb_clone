import express from "express"
import dotenv from "dotenv"

dotenv.config()

let port = process.env.PORT || 6000

let app = express()

app.get("/", (req, res) => {
    res.send("live from server...")
})

app.listen(port, () => {
    console.log("Server started")
})
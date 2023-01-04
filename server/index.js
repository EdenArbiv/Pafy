const express = require('express')
const {connectToMongoDatabase} = require('./database.js')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const port = process.env.PORT;
const jwt_key =  process.env.JWT_KEY;
const cors = require('cors')
app.use(express.json())
connectToMongoDatabase()

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


app.use(cors({
    origin:`http://localhost:${port}`,
    credentials: true
}))


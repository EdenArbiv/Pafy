const express = require('express')
const {connectToMongoDatabase} = require('./database.js')
const app = express()
const port = 3001;
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


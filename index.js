var cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const exampleToolRouter = require('./routes/example_tool.route')
const port = 3000

const app = express()

mongoose.connect('mongodb://localhost:27017/dashboard').then(
    () => {
        console.log('database connected')
    },
    (reason) => {
        console.log('failed to connect database')
        console.log(reason)
    }
)
app.use(cors())
app.get('/test', (req, res) => {
    res.send('API works!')
})
app.use('/example_tool', exampleToolRouter)
app.listen(port)
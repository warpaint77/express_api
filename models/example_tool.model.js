const mongoose = require('mongoose')

const exampleToolModel = mongoose.model(
    'example_tool',
    new mongoose.Schema({
        date: mongoose.Schema.Types.String,
        testResult: mongoose.Schema.Types.String,
        description: mongoose.Schema.Types.String
    })
)

module.exports = exampleToolModel
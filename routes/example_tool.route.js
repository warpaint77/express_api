const express = require('express')
const { graphDataController, tableDataController } = require('../controllers/example_tool.controller')
const { tableData, graphData } = require('../services/example_tool.service')
const exampleToolRouter = express.Router()

exampleToolRouter.get('/table-data', tableDataController(tableData))

exampleToolRouter.get('/graph-data', graphDataController(graphData))

module.exports = exampleToolRouter

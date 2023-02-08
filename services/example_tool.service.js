const { getTableData, getGraphData } = require("../repositories/example_tool.repositorie")

const tableData = (startDate, endDate) => {
    try {
        return getTableData(startDate, endDate)
    } catch (error) {
        throw error
    }
}

const graphData = (startDate, endDate) => {
    try {
        return getGraphData(startDate, endDate)
    } catch (error) {
        throw error
    }
}

module.exports = {
    tableData,
    graphData
}
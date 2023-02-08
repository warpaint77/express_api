const tableDataController = (tableData) => async (req, res) => {
    try {
        const data = await tableData(req.query.startDate, req.query.endDate)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

const graphDataController = (graphData) => async (req, res) => {
    try {
        const data = await graphData(req.query.startDate, req.query.endDate)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    tableDataController,
    graphDataController
}
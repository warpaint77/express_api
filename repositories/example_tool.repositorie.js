const exampleToolModel = require("../models/example_tool.model")

const getTableData = async (startDate, endDate) => {
    const pipeline = []

    const match = {
        $match: {
            date: {
                $gte: startDate,
                $lte: endDate
            }
        }
    }

    const sort = {
        $sort: {
            date: -1
        }
    }

    pipeline.push(match, sort)

    return await exampleToolModel.aggregate(pipeline).exec()

}

const getGraphData = async (startDate, endDate) => {
    const pipeline = []

    const match = {
        $match: {
            date: {
                $gte: startDate,
                $lte: endDate
            }
        }
    }

    const group = {
        $group: {
            _id: {
                date: "$date",
                testResult: "$testResult"
            },
            count: {
                $sum: 1
            }
        }
    }

    const project = {
        $project: {
            _id: 0,
            date: "$_id.date",
            testResult: "$_id.testResult",
            count: "$count"
        }
    }

    pipeline.push(match, group, project)
    return await exampleToolModel.aggregate(pipeline).exec()
}

module.exports = {
    getTableData,
    getGraphData
}
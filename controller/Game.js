// Import Game Models
const GameHistoryModels = require('../model/MongoDB/Schema/GameHistory')
const GameTotalScoreModels = require('../model/MongoDB/Schema/GameTotalScore')

exports.SaveScore = async (req, res) => {
    let { user_id, win, lose, draw } = req.body
    let newDataHistory = {
        user_id: user_id,
        win: win, lose: lose, draw: draw,
        type_player: "", level: 0,
        date_time: Date.now()
    }

    try {
        let findDataTotalScore = await GameTotalScoreModels.findOne({ user_id: user_id })
        let createGameScore = await GameHistoryModels.create(newDataHistory)
        if ( !findDataTotalScore ) {
            let createTotalScore = await GameTotalScoreModels.create(newDataHistory)
            res.send({ statusCode: 200, message: 'successfull to save game score !'})
        } else {
            findDataTotalScore.win = findDataTotalScore.win + win
            findDataTotalScore.lose = findDataTotalScore.lose + lose
            findDataTotalScore.draw = findDataTotalScore.draw + draw
            console.log(findDataTotalScore)
            let updateTotalScore = await GameTotalScoreModels.findOneAndUpdate(
                { user_id: user_id }, findDataTotalScore
            )
            res.send({ statusCode: 200, message: 'successfull to save game score !'})
        }
    } catch (error) {
        console.log(error)
        res.staus(500).send({
            message: 'failed to save game score!',
            statusCode: 500,
        })
    }
}

exports.GetScore = async (req, res) => {
    let UserId = req.params.id

    try {
        let getScore = await GameTotalScoreModels.aggregate([
            { $match: { 'user_id': UserId } },
            {
                $lookup: {
                    from: 'gamehistories',
                    localField: 'user_id',
                    foreignField: 'user_id',
                    as: 'score_history'
                }
            }
        ])

        res.send({
            statusCode: 200,
            message: 'Successfull to get game data score!',
            results: getScore
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            statusCode: 500,
            message: 'Failed to get game data score!',
        })
    }
}

exports.TesterGame = async (req, res) => {
    const { giveNumber } = req.body
    let newDataPassing = {
        giveNumber: !Number(giveNumber) ? 0 : Number(giveNumber)
    }
    console.log(newDataPassing)
}
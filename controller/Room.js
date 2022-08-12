const GameRoom = require('../model/MongoDB/Schema/GameRoom')
const GameRoomDB = require('../model/MongoDB/Schema/GameRoom')

exports.CreateRoom = async (req, res) => {
    let createRoomData = {
        player1: false,
        player2: false,
        player1_data: null,
        player2_data: null,
        player1_choose: null,
        player2_choose: null,
        whosWin: null
    }
    
    try {
        let gameRoom = await GameRoomDB.create(createRoomData)
        res.send({
            message: 'Successfull to create game room!',
            data: gameRoom
        })
    } catch (error) {
        res.status(500).send({
            message: 'failed to create room!'
        })
    }
}

// 
exports.JoinRoom = async (req, res) => {
    try {
        let gameRoom = await GameRoomDB.findOne({ _id: req.query.room })
        if ( !gameRoom.player1 && !gameRoom.player2 ) {
            let updateJoin = await GameRoomDB.findOneAndUpdate(
                { _id: req.query.room }, // find room
                { player1: true, player1_data: JSON.stringify({ id: req.query.id, player: req.query.player }) } // update data
            )
            let getDataJoin = await GameRoomDB.findOne({ _id: req.query.room })
            res.send({
                message: 'Successfull to join!',
                data: getDataJoin
            })
        }
        else if ( !gameRoom.player2 && gameRoom.player1 ) {
            let dataPlayer1 = JSON.parse(gameRoom.player1_data)
            if ( req.query.id === dataPlayer1.id ) {
                console.log('goes here')
                res.send({
                    message: 'Successfull to join!',
                    data: gameRoom
                })
            } else {
                console.log('goes here 2')
                let updateJoin = await GameRoomDB.findOneAndUpdate(
                    { _id: req.query.room }, // find room
                    { player2: true, player2_data: JSON.stringify({ id: req.query.id, player: req.query.player }) } // update data
                )
                let getDataJoin = await GameRoomDB.findOne({ _id: req.query.room })
                res.send({
                    message: 'Successfull to join!',
                    data: getDataJoin
                })
            }
        } else {
            console.log(gameRoom)
            res.send({
                message: 'Successfull to join!',
                data: gameRoom
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'failed to join room!'
        })
    }
}
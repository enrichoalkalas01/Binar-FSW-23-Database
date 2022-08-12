const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    player1: { type: Boolean },
    player2: { type: Boolean },
    player1_data: { type: String },
    player2_data: { type: String },
    player1_choose: { type: String },
    player2_choose: { type: String },
    whosWin: { type: String }
})

const GameRoom = Mongoose.model('GameRoom', Schema)
module.exports = GameRoom
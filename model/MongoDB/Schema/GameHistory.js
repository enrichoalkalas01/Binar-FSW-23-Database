const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    user_id: { type: Number, require: true },
    win: { type: Number },
    draw: { type: Number },
    lose: { type: Number },
    type_player: { type: String },
    level: { type: Number },
})

const GameHistory = Mongoose.model('GameHistory', Schema)
module.exports = GameHistory
const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    user_id: { type: String, require: true },
    win: { type: Number },
    draw: { type: Number },
    lose: { type: Number },
    type_player: { type: String },
    level: { type: Number },
    date_time: { type: Date },
    // score: { type: Mongoose.Types.ObjectId, ref: "GameHistory" }
})

const GameTotalScore = Mongoose.model('GameTotalScore', Schema)
module.exports = GameTotalScore
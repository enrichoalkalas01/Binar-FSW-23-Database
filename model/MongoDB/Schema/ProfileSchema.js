const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    user_id: { type: String, require: true },
    first_name: { type: String },
    last_name: { type: String },
    fullname: { type: String },
    umur: { type: Number },
    tgl_lahir: { type: String },
    gender: { type: String },
    address: { type: String },
})

const Profile = Mongoose.model('Profile', Schema)
module.exports = Profile
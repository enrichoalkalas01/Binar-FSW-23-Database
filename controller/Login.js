// Import Schema / Model User
const UserModel = require('../model/MongoDB/Schema/UserSchema')

exports.Login = (req, res) => {
    UserModel.find({ username: req.body.username }).then(response => {
        res.send({
            message: 'successfull to get data user',
            statusCode: 200,
            data: response
        })
    }).catch(err => {
        console.log(err)
        res.send({
            message: 'failed to get data user',
            statusCode: 400
        })
    })
}

exports.Register = (req, res) => {
    UserModel.create(req.body).then(response => {
        res.send({
            message: 'successfull to create data user',
            statusCode: 200,
            data: response
        })
    }).catch(err => {
        console.log(err)
        res.send({
            message: 'failed to create data user',
            statusCode: 400
        })
    })
}

// module.exports = Login // export 1 function

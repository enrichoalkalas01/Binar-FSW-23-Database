const { response } = require('express');
const { Sequelize } = require('sequelize');

// // Import Schema / Model User
const UserModel = require('../model/MongoDB/Schema/UserSchema');
const ProfileModel = require('../model/MongoDB/Schema/ProfileSchema');

// // Import Model User
// const db = require('../models')
// db.sequelize.sync()
// const { User, Profile } = require('../models')

exports.Login = async (req, res) => {
    const { username, password } = req.body
    if ( !username || !password ) {
        res.status(400).send({ message: "Wrong username or password", statusCode: 400 })
    } else {
        try {
            // Check User Exist
            let findUser = await UserModel.findOne({ username: username })

            console.log(findUser)
            if ( !findUser || findUser.length < 0 ) {
                res.status(400).send({ message: "Wrong username or password", statusCode: 400 })
            } else {
                // Check Password
                if ( findUser.password === password ) {
                    // Get Data Profile
                    let getProfile = await ProfileModel.findOne({ user_id: findUser._id })
                    res.send({
                        message: 'Successfull to login / get data user',
                        statusCode: 200,
                        result: {
                            id: findUser._id,
                            username: findUser.username,
                            email: findUser.email,
                            token: '0a39mdsakpd93aanlsid',
                            profile: getProfile
                        }
                    })
                } else {
                    res.status(400).send({ message: "Wrong username or password", statusCode: 400 })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }
}

exports.Register = async (req, res) => {
    const { username, password, email } = req.body
    if ( !username || !password || !email ) {
        res.status(400).send({
            message: "Can't send data to server, require the true data!",
            statusCode: 400,
        })
    } else {
        try {
            // Check User if exist
            let findUser = await UserModel.findOne({ username: username, email: email })
            if ( findUser ) {
                res.status(400).send({
                    message: "Username or Email has registered. Please use the othere!",
                    statusCode: 400,
                })
            } else {
                // Check Each Char Data
                // Encryption Password
                // Send New Data
                let createUser = await UserModel.create({
                    username: username, password: password,
                    email: email
                })
                
                let createProfile = await ProfileModel.create({
                    user_id: createUser._id, first_name: '',
                    last_name: '', fullname: '', umur: 0,
                    tgl_lahir: '', gender: '', address: '',
                })

                // Send Verifikasi
                res.send({
                    statusCode: 200,
                    message: 'Successfull to register data!',
                    result: { username: username, email: email }
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }
}

exports.RegisterSql = async (req, res) => {
    let newDataUser = { username: 'naruto', password: '12345', email: 'narutohokage@gmail.com' }
    
    try {
        // user create
        let createUser = await User.create(newDataUser)
        let newProfileUser = {
            user_id: createUser.id,
            first_name: "",
            last_name: "",
            fullname: createUser.username,
            umur: 0,
            tgl_lahir: 0,
            gender: "",
            address: "",
        }

        // profile create
        let createProfile = await Profile.create(newProfileUser)
        res.send({
            message: 'successfull to get data',
            result: createProfile,
            statusCode: 200,
        })
    } catch (error) {
        console.log(error)
    }
}

exports.LoginSql = (req, res) => {
    const { username, password } = req.body
    User.findOne({ where: { username: username, password: password } }).then(response => {
        console.log(response)
        res.send({
            message: 'successfull to get data',
            result: response,
            statusCode: 200,
        })
    }).catch(err => {
        console.log(err)
        res.send('failed to get data')
    })
}

// module.exports = Login // export 1 function

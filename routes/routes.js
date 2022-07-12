const Express = require('express')
const Routes = Express.Router()

// Import Controller
const LoginController = require('../controller/Login')

// user process
Routes.post('/login', LoginController.Login)
Routes.post('/register', LoginController.Register)

module.exports = Routes
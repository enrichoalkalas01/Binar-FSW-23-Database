const Express = require('express')
const Routes = Express.Router()

const JWT = require('jsonwebtoken')

// Import Controller
const LoginController = require('../controller/Login')
const GameController = require('../controller/Game')

// user process
Routes.post('/login', LoginController.Login)
Routes.post('/register', LoginController.Register)
Routes.post('/sql/register', LoginController.RegisterSql)
Routes.post('/sql/login', LoginController.LoginSql)

Routes.get('/form-layout', (req, res, next) => {
    res.render('form', { callback: null })
})

Routes.post('/form-layout', (req, res) => {
    const { username, password, confirmPassword } = req.body
    if ( password != confirmPassword ) {
        res.render('form', {
            callback: {
                messageConfirmPassword: 'confirm password did not match',
                statusForm: 400,
            }
        })
    }

    console.log(req.body)
})

// Routes.get('/product-api', (req, res) => {
//     let dataArr = []
//     for( let i = 0; i < 10; i++ ) {
//         dataArr[i] = {
//             title: 'Product ' + i,
//             price: i % 2 === 0 ? 500 * i : 100 * i,
//             description: 'ini adalah product dari' + i
//         }
//     }
    
//     res.send({
//         message: 'successfull',
//         statusCode: 200,
//         data: dataArr
//     })
// })

// Routes.delete('/product', (req, res) => {
//     console.log(req.body)
// })

Routes.get('/profile', LoginController.Profile)

Routes.post('/game-score', GameController.SaveScore)
Routes.get('/game-score/:id', GameController.GetScore)
Routes.post('/game-score-test/:id', GameController.TesterGame)

Routes.get('/token-create', async (req, res) => {
    let createToken = await JWT.sign(
        { username: 'sasuke', type_user: 'asldaksd', email: "sasuke@konoha.com" },
        process.env.SecretKey,
        // { expiresIn: 60 * 60 }
    )

    res.send({
        message:'successfull to get data',
        result: {
            token: createToken
        }
    })
})

Routes.get('/token-detect', async (req, res) => {
    let dataAdmin = { data: "Data Admin Here!!!"}
    let dataUser = { data: "Data User Here!!!"}

    if ( !req.headers.authorization ) {
        res.status(401).send({ message: 'Unauthorized!' })
    } else {
        let token = req.headers.authorization.split(' ')
        if ( token[0].toLowerCase() !== 'bearer' ) {
            res.status(401).send({ message: 'Unauthorized!' })
        } else {
            JWT.verify(token[1], process.env.SecretKey, (err, result) => {
                if ( err ) res.status(401).send({ message: 'Unauthorized!' })
                if ( result ) {
                   if ( result.type_user === 'admin' ) {
                        res.send({
                            message: 'Successfull to get data!',
                            data: dataAdmin
                        })
                   } else {
                        res.send({
                            message: 'Successfull to get data!',
                            data: dataUser
                        })
                   }

                }
            })
        }
        
    }

    
    // console.log(req.body)
    
    
})

Routes.get('/socket-test', (req, res) => {
    res.render('socket-test')
})

Routes.get('/test-cors', (req, res) => {
    res.send({
        message: 'successfull to get data!',
        data: 'success to go test cors'
    })
})

Routes.post('/token-detect', (req, res) => {
    console.log(req.body)
    console.log(req.headers)
    res.send({
        message: 'ok'
    })
})

Routes.get('/product', (req, res) => {
    res.render('product-view')
})

Routes.get('/product/api', (req, res) => {
    console.log(req.headers)
    res.send({
        message: 'data here !!!!'
    })
})

Routes.post('/product/api', (req, res) => {
    res.send('ok')
})

const RoomController = require('../controller/Room')

Routes.get('/game', (req, res) => {
    res.render('game')
})
Routes.post('/create-room', RoomController.CreateRoom)
Routes.get('/join-room', RoomController.JoinRoom)

module.exports = Routes
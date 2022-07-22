const Express = require('express')
const Routes = Express.Router()

// Import Controller
const LoginController = require('../controller/Login')
const GameController = require('../controller/Game')

// user process
Routes.post('/login', LoginController.Login)
Routes.post('/register', LoginController.Register)
Routes.post('/sql/register', LoginController.RegisterSql)
Routes.post('/sql/login', LoginController.LoginSql)

Routes.get('/form-layout', (req, res) => {
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

Routes.get('/product-api', (req, res) => {
    let dataArr = []
    for( let i = 0; i < 10; i++ ) {
        dataArr[i] = {
            title: 'Product ' + i,
            price: i % 2 === 0 ? 500 * i : 100 * i,
            description: 'ini adalah product dari' + i
        }
    }

    setTimeout(() => {
        // res.send({
        //     message: 'successfull',
        //     statusCode: 200,
        //     data: dataArr
        // })
        res.sendStatus(400)
    }, 1000)
})

Routes.delete('/product', (req, res) => {
    console.log(req.body)
})

Routes.post('/game-score', GameController.SaveScore)
Routes.get('/game-score/:id', GameController.GetScore)
Routes.post('/game-score-test/:id', GameController.TesterGame)

module.exports = Routes
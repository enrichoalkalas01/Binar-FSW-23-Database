const Express = require('express')
const Morgan = require('morgan')
const PORT = 7777
const App = Express()

App.use(Express.static('public')) // berfungsi untuk membaca folder public
App.use(Express.json()) // berfungsi untuk menerima data JSON dari FRONT END / Request
App.use(Express.urlencoded({ extended: true })) // berfungsi untuk menerima data form urlencoded FRONT END / Request
App.use(Morgan('dev')) // berfungsi untuk mendeteksi kegiatan nodejs

App.set('view engine', 'ejs') // berfungsi untuk menggunakan folder view sebagai default front end template dengan extension ejs

App.listen(PORT, () => console.log(`Server is running in port : ${ PORT }`))

// Import Routes
const Routes = require('./routes/routes')
App.use(Routes)

// Import & Use MongoDB Connection
const ConnectionMongoDB = require('./model/MongoDB/Connection')
ConnectionMongoDB()
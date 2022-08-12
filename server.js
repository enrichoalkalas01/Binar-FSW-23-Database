const Http = require('http')
const Express = require('express')
const Morgan = require('morgan')
const Cors = require('cors')
const PORT = 7777
const App = Express()
const Dotenv = require('dotenv')
// const socketio = require('socket.io')
// const { Server } = require("socket.io");
// const serverExpress = Http.createServer(App)
// const io = new Server(serverExpress)

Dotenv.config({ path: __dirname + '/config/Config.env' })
App.use(Cors())
App.use(Express.static('public')) // berfungsi untuk membaca folder public
App.use(Express.json()) // berfungsi untuk menerima data JSON dari FRONT END / Request
App.use(Express.urlencoded({ extended: true })) // berfungsi untuk menerima data form urlencoded FRONT END / Request
App.use(Morgan('dev')) // berfungsi untuk mendeteksi kegiatan nodejs

App.set('view engine', 'ejs') // berfungsi untuk menggunakan folder view sebagai default front end template dengan extension ejs

// const ExpressServer = App.listen(PORT, () => console.log(`Server is running in port : ${ PORT }`))
App.listen(PORT, () => console.log(`Server is running in port : ${ PORT }`))
// serverExpress.listen(PORT, () => console.log(`Server is running on port : ${ PORT }`))

// Import Routes
const Routes = require('./routes/routes')
App.use(Routes)

// Import & Use MongoDB Connection
const ConnectionMongoDB = require('./model/MongoDB/Connection')
ConnectionMongoDB()

// const io = socketio(ExpressServer, {
//     path: '/socket.io', // make client can use the socket io from the server modules
//     serveClient: true, // make client can use the socket io from the server modules
//     origin: '*' // Cors origin
// })

// io.on('connection', (socket) => {
//     console.log(socket.connected)
//     socket.emit('messageFromServer', { data: "welcome to the socket io server" })
//     socket.on('messageToServer', (dataFromClient) => {
//         console.log(dataFromClient)
//     })
// })

// io.on('connection', (socket) => {
//     console.log(socket.connected)
//     console.log('a user connected');
//     io.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });
// });
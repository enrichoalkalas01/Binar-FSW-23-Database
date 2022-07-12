const Mongoose = require('mongoose')

const ConnectDB = async () => {
    try {
        // MongoDB Connection
        const Conn = await Mongoose.connect(
            'mongodb+srv://enrichobinarlearn:12345@learnmongodb.bqbx0.mongodb.net/binar_learn?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        )

        console.log(`MongoDB connected : ${ Conn.connection.host }`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = ConnectDB
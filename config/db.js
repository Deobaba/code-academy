const mongoose = require('mongoose')

const connectDB = () =>{
    const conn =  mongoose.connect (process.env.MONGO_URI, { useUnifiedTopology: true ,  useNewUrlParser: true })
    const db = mongoose.connection
    db.on('connected', ()=> console.log('database connected'))
    db.on('error', (error)=>{
        console.log(`error occured while connecting to database ${error}`)
    })
}

module.exports = connectDB
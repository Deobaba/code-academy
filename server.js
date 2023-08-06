const express = require('express')
const dotenv = require('dotenv')


const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB()

const app = express()





const PORT = process.env.PORT



server = app.listen(PORT, () => {

    console.log('server is listening',`${PORT}`)
    // console.log(__dirname)
})
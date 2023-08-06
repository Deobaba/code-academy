const express = require('express')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/error')

// import in the route files
const bootcamps = require('./routes/bootcamp')

const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB()

const app = express()



//body parser
app.use(express.json())

// mount it with app here
// /bootcamps here links the routes
app.use('/bootcamps', bootcamps)

// error midlleware , below the bootcamp middlware
app.use(errorHandler)





const PORT = process.env.PORT



server = app.listen(PORT, () => {

    console.log('server is listening',`${PORT}`)
    // console.log(__dirname)
})
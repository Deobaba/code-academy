const express = require('express')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')
dotenv.config({path:'./config/config.env'})

connectDB()


// import in the route files
const bootcamps = require('./routes/bootcamp')


const app = express()


//body parser
app.use(express.json())

// mount it with app here
// /bootcamps here links the routes
app.use('/bootcamps',bootcamps)


// error midlleware , below the bootcamp middlware
app.use(errorHandler)





const PORT = process.env.PORT



 app.listen(PORT, () => {

    console.log('server is listening',`${PORT}`)
    // console.log(__dirname)
})


// Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//     console.log(`Error: ${err.message}`);
//     // Close server & exit process
//     // server.close(() => process.exit(1));
//   });
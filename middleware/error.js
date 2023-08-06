const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err,req,res,next) =>{
    console.log(err.stack)
    let error = {...err}

    error.message = err.message

    if(err.name === "CastError"){
        const message = `bootcamp with id of ${err.value} can not be found`;
        error = new ErrorResponse(message,404)
    }

    if(err.code === 11000){
        const message = 'Duplicate field entered'
        error = new ErrorResponse(message, 400)
    }

    if(err.name == 'ValidatorError'){
        const message = Object.value(err.errors).map(val => val.message)
        error= new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success: true,
        error: error.message || "server error"
    })
}


module.exports = errorHandler
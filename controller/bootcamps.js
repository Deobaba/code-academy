// connect bootcampSchema here 
const Bootcamp = require('../models/bootcamp')
// error response
const ErrorResponse = require('../utils/errorResponse')
// asynchandler
const asyncHandler = require('../middleware/asynchandler')


// @desc  get all bootcamps
// @route GET /bootcamps
// @access  public
exports.getBootCamps = asyncHandler(async(req,res, next)=> { 
    const bootcamp = await Bootcamp.find()
    res.status(200).json({
        success: true,
        count:bootcamp.length,
        data: bootcamp
    })


})

// @desc  get a bootcamp
// @route GET /bootcamps/:id
// @access  public
exports.getBootCamp = asyncHandler(async(req,res, next)=> { 
        const bootcamp = await Bootcamp.findById(req.params.id)

        if(!bootcamp){
            return next(new ErrorResponse(`bootcamp with ${req.params.id} id can not be found`, 404))
        }
        res.status(200).json({success:true, data: bootcamp})


})

// @desc  create a bootcamp
// @route POST /bootcamps
// @access  private
exports.createBootCamp = asyncHandler(async(req,res, next)=> {
 
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
        success: true,
        data:bootcamp
    })

})

// @desc  update a bootcamp
// @route PUT /bootcamps/:id
// @access  private
exports.updateBootCamp = asyncHandler(async(req,res, next)=> {
    
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        if(!bootcamp){
            return res.status(400).json({
               success:false 
            })}
            res.status(200).json({success:true, data: bootcamp})
    
})


// @desc  delete a bootcamp
// @route DELETE /bootcamps/:id
// @access  private
exports.deleteBootCamp = asyncHandler(async(req,res, next)=> { 
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if(!bootcamp){
            return res.status(400).json({
                success:false
            })
        }
        res.status(200).json({success:true, message: "deleted"})

})



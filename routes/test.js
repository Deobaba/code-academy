const express = require('express')
const router = express.Router()

// const testhere = (req,res,next)=>{
//     res.send('it got here')
// }

router.get('/', (req, res, next)=>{
    console.log('it got here')
    res.send({success: true,
    data:'bootcamp'})
})


module.exports = router;
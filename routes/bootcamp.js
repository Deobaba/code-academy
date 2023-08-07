const express = require('express')
const {getBootCamps,getBootCamp,createBootCamp,updateBootCamp,deleteBootCamp} = require('../controller/bootcamps')
const router = express.Router()
const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);




module.exports = router;
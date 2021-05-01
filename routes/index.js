//importing express
const express =require('express');

//using express router
const router=express.Router();

console.log('Router loaded');

router.use('/doctors', require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/reports',require('./reports'));


module.exports=router;
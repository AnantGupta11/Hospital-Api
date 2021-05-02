//importing express
const express =require('express');

//using express router
const router=express.Router();
const passport=require('passport');

const reportsController=require('../controllers/reportsController');


router.get('/:status',passport.authenticate('jwt', {session:false}), reportsController.sameReports);


module.exports=router;
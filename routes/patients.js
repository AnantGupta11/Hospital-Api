//importing express
const express =require('express');

//using express router
const router=express.Router();
const passport = require('passport');

const patientsController=require('../controllers/patientsController');

router.post('/register', patientsController.register);

router.post('/:id/create_report', passport.authenticate('jwt', {session:false}) , patientsController.createReport);








module.exports=router;
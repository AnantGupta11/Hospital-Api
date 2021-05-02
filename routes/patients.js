//importing express
const express =require('express');

//using express router
const router=express.Router();

const patientsController=require('../controllers/patientsController');

router.post('/register', patientsController.register);

router.post(':id/create_report', patientsController.createReport);








module.exports=router;
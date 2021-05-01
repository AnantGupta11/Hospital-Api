//importing express
const express =require('express');

//using express router
const router=express.Router();

const doctorsController= require('../controllers/doctorsController');

router.post('/register',doctorsController.register);
router.post('/login', doctorsController.login);






module.exports=router;
const Doctor=require('../models/doctor');

//importing json web tokens
const jwt= require('jsonwebtoken');

//register the doctor 
module.exports.register= async function(req,res){
    
    try{
        //first find if the doctor is already present in database
        let doctor= await Doctor.findOne({email: req.body.email});
        
        //if doctor is not present then create 
        if(!doctor){
        //    await Doctor.create(req.body
            let newDoctor= new Doctor();
            newDoctor.name=req.body.name;
            newDoctor.email= req.body.email;
            newDoctor.mobile_no=req.body.mobile_no;
            newDoctor.password= newDoctor.setPassword(req.body.password);
            newDoctor.save();
           return res.status(200).json({

                message: 'Doctor registered successfully'

            })
        }else{
            //if already present
            return res.status(409).json({
                message: "You are already registered ! please login using Your email/phone"
            })
        }
    }catch(err){
        console.log('Error------->',err);
        return res.status(500).json({
            message: 'Internal server Error'
        })
    }
}

//login the doctor
module.exports.login= async function(req,res){
    try{
        
        //find the doctor
        let doctor= await Doctor.findOne({email:req.body.email});
        
        //if doctor is not present or doctor's password is wrong
        if(!doctor || (!doctor.validPassword(req.body.password))){
            return res.json(422,{
                message: 'Invalid Username or Password'
            });
        }

        //if all the info right
        return res.json(200,{
            message:'Sign in SuccessFully !',
            data:{
                token: jwt.sign(doctor.toJSON(),'hospital_api', {expiresIn: '1000000'})
            }
        })

    }catch(err){
        console.log('Error------->',err);
        return res.status(500).json({
            message: 'Internal server Error'
        })
    }
}
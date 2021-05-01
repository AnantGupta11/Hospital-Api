const Doctor=require('../models/doctor');

module.exports.register= async function(req,res){
    
    try{
    
        let doctor= await Doctor.findOne({email: req.body.email});
        
        if(!doctor){
           await Doctor.create(req.body);
           return res.status(200).json({

                message: 'Doctor registered successfully'

            })
        }else{
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
    
        let doctor= await Doctor.findOne({email:req.body.email});
        
        if(!doctor || doctor.password != req.body.password){
            return res.json(422,{
                message: 'Invalid Username or Password'
            });
        }

        return res.json(200,{
            message:'Sign in SuccessFully'
        })

    }catch(err){
        console.log('Error------->',err);
        return res.status(500).json({
            message: 'Internal server Error'
        })
    }
}
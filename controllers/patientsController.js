//importing patient model
const Patient = require('../models/patient');
// const patient = require('../models/patient');

//importing doctor model
const Doctor= require('../models/doctor');

const Report=require('../models/report');

//patient can register their name and mobile no
module.exports.register= async function(req,res){
    try{
        let patient= await Patient.findOne({mobile_no: req.body.mobile_no});
        if(patient){
            //if patient is already registered
            return res.status(409).json({
                message: "You are already registered ! please login using Your mobile_no",
                //if patient is already registered then return all his/her data
                data:{
                    patient_details:patient
                }
            })
        }else{
            //if patient is not registered then register
            await Patient.create(req.body);
            return res.status(200).json({

                message: 'Patient registered successfully'

            })
        }
    }catch(err){
        console.log('Error------->',err);
        return res.status(500).json({
            message: 'Internal server Error'
        })
    }
}

//Doctor can create report of patient

module.exports.createReport= async function(req,res){
    try{
        let doctor= await Doctor.findById(req.user.id);
        if(doctor){
            //if the requested user is a doctor

            let patient= await Patient.findById(req.params.id);
            //check if the patient is in our database
            if(patient){
                //generate report
                let status=req.body.status;
                // Array.isArray(req.body.status) ? req.body.status : [req.body.status];
                let report = await Report.create({
                    status: status,
                    doctor:doctor,
                    patient:patient,
                    Date: new Date().toDateString()
                })
                
                report= await Report
                .findById(report._id)
                .populate('doctor')
                .populate('patient')
                return res.status(200).json(report);

            }else{
                //if patient is not found then tell to register
                return res.status(404).json({
                    message: 'Patient is not found First register the Patient'
                })
            }

        }else{
            //if doctor is not found in database then tell him/her to register first
            return res.status(404).json({
                message: 'Doctor is not found First register yourself'
            })           

        }

    }catch(err){
        console.log('Error------->',err);
        return res.status(500).json({
            message: 'Internal server Error'
        })
    }
}

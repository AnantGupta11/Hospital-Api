const mongoose=require('mongoose');

const patientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:String,
        default:Date.now()
    }
},{
    timestamps:true
});


const Patient= mongoose.model('Patient',patientSchema);

module.exports=Patient;


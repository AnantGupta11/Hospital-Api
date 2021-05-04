const mongoose= require('mongoose');
const crypto= require('crypto');

const doctorSchema= new mongoose.Schema({
    
    email:{
        type: String,
        required: true,
        unique:true
    },
    name:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        unique: true,
        required:true
    },
    hash:String,
    salt:String
},{
    timestamps:true
})

//hasing password using crypto
doctorSchema.methods.setPassword =  function(password){
    this.salt = crypto.randomBytes(16).toString('hex'); 
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
    return this.hash;
}
doctorSchema.methods.validPassword =  function(password){
    var hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
}

const Doctor=mongoose.model('Doctor',doctorSchema);

module.exports=Doctor;
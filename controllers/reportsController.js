const Report= require('../models/report');


module.exports.sameReports= async function(req,res){
    try{
        let status= req.params.status;
        // Array.isArray(req.body.status) ? req.body.status : [req.body.status];
        if(!status){
            return res.status(404).json({
                message: 'Record Not Found !'
            });
        }

        //fetch all the reports mached to status
        let reports=await Report
        .find({status:status})
        .sort('-createdAt')
        .populate('doctor')
        .populate('patient');

        return res.status(200).json({
            reports: reports
        })

    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error !'
        })
    }
}
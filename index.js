const express =require('express');
const app=express();
// port on which server is running
const port= 8000;

//importing db
const db=require('./config/mongoose');

app.use(express.urlencoded({extended: true}));







//using express router
app.use('/',require('./routes'));


//firing up server 
app.listen(port, function(err){
    if(err){
        console.log('Error in firing Up Server',err);
        return;
    }
    console.log('Server is running on port:',port)
})
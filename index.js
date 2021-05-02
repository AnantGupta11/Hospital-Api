const express =require('express');
const app=express();
// port on which server is running
const port= 8000;

//importing db
const db=require('./config/mongoose');
const passport =require('passport');
const passpotJWT= require('./config/passport-jwt-strategy');

app.use(express.urlencoded({extended: true}));
app.use(express.json());






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
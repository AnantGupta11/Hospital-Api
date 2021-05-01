const express =require('express');
const app=express();

const port= 8000;










//firing up server 
app.listen(port, function(err){
    if(err){
        console.log('Error in firing Up Server',err);
        return;
    }
    console.log('Server is running on port:',port)
})
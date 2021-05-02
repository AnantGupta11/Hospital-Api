# Hospital - Api
An API for the doctors of a Hospital which has been allocated by the Government for testing and quarantine + well being of COVID-19 patients.

## Routes

* /doctors/register - doctor can register there name,email,password and Mobile_no

* /doctors/login - doctor can login using there email and password

* /patients/register - doctor can register there patient through his name and mobile_no

* /patients/:id/create_report - doctor can create report for his patient 

* /patients/:id/all_reports - doctor can see his patients all reports 

* /reports/:status - List of all reports of all the patients filtered by a specific status

## Tech Stack
 *Node Js
 *Mongo Db


## dependencies used
    -express
    -jsonwebtoken
    -mongoose
    -nodemon
    -passport
    -passportjwt

## Getting Started

    -install all dependencies
    -connect to mongodb
    -setup the passport-jwt-strategy

    -Run command: `npm start`
    -Go to http://localhost:8000 
    
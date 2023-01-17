const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appointment = express.Router();

const db = require('../../../utils/db');

process.env.SECRET_KEY = 'JD';

appointment.post('/register', (req, res) => {
    // const user_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    const appointmentData = {
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        address     : req.body.address,
        email       : req.body.email,
        phone_no    : req.body.phone_no,
        dateTime    : req.body.dateTime,
        disease     : req.body.disease
    }
    console.log(req.body.dateTime)
    let create = `INSERT INTO appoinment (firstname, lastname, address, email, phone_no, dateandtime,disease)
                              VALUES ( "${appointmentData.first_name}", 
                                       "${appointmentData.last_name}", 
                                       "${appointmentData.address}",
                                       "${appointmentData.email}",
                                       "${appointmentData.phone_no}",
                                       "${appointmentData.dateTime}",
                                       "${appointmentData.disease}")`;

                db.query(create, (err2, result2) => {
                        console.log("worked")
                        res.send("success")
                    })
})
appointment.get('/appointedPatient', (req, res) => {  
    let appointed = `SELECT * FROM appoinment`;
    db.query(appointed, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});
appointment.get('/availDoctor', (req, res) => {  
    let doctor = `SELECT * FROM doctors`;
    db.query(doctor, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});
module.exports=appointment;
require('./db');
const Register = require('./models/schema');
const Appointment = require('./models/Appointment')

const jwt = require('jsonwebtoken');
const express = require("express");
const app = express.Router();

app.post('/signup', async (req, res) => {   
    try{
        const { username, email, password } = req.body; 
        console.log("inside register backend") 
        const user = await Register.find({email: email});
        const len = user.length;
        console.log(len)
        if(len === 0) {
            const new_user = new Register({username, email, password});
            new_user.save();
            return res.status(200).json({"msg":"User Added"})
        } else {
            return res.status(503).json({"msg":"User Already Exists"})
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

app.post('/appointment', async (req, res) => {
    try {
        const { username, email, doctor, date, mobile } = req.body;
        console.log(username+" "+email+" "+doctor);
        const appoint = new Appointment({username, email, mobile, doctor, date});
        appoint.save();
        return res.status(200).json({"msg":"Appointment Fixed"})
    } catch (err) {
        return res.status(500).json({err: err});
    }
})

app.post('/login', async (req, res) => {
    try {
        const user = await Register.findOne({email: req.body.email, password: req.body.password});
        if(user) {
            const token = jwt.sign({ _id:user._id }, "mysecret123");
            res.cookie("token", token, {expire: new Date()+5});
            res.cookie("email", user.email, {expire: new Date()+5});
            console.log(token);
            return res.status(200).json({status: 'ok', user, token});
        } else {
            return res.status(501).json({});
        }
    } catch(err) {
        return res.status(500).json({err: err});
    }
});

module.exports = app;
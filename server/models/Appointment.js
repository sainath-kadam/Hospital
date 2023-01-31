const mongoose = require('mongoose');

const appointmentSchema =  new mongoose.Schema({
    name:String,
    email: String,
    mobile: Number,
    doctor: String,
    date: Date,
    visited: {
        type: Boolean,
        default: false
    }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Appointment", appointmentSchema);
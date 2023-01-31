const mongoose = require('mongoose');

const registerSchema =  new mongoose.Schema({
    username: String,
    email: String,
    password : {
        type: String,
        minlength : [8, "Password Length should be at least 8"],
        maxlength : [30, "Email length should not be greater than 30"],
        required:true
    },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Register", registerSchema);
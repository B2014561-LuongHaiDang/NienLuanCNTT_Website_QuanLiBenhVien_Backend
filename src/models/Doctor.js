const mongoose = require('mongoose')
const  DoctorSchema = new mongoose.Schema(
    { 
        name: { type: String, require: true},
        maso: { type: String, require: true},
        specialist: { type: String, require: true},
        avatar: { type: String, require: true},
        
    },
    {
        timestamps: true
    }
);
const Doctor =  mongoose.model("Doctor", DoctorSchema);
module.exports = Doctor;
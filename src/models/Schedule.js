const mongoose = require('mongoose')

const  ScheduleSchema = new mongoose.Schema(
    { 
        day: { type: Date},
        doctorId: { type: String, ref: 'Doctor'},
        userId: { type: String, ref: 'User'},
        status: { type: Boolean, default: false},
        birthday: { type: String},
        address: { type: String},
        phone: { type: String},
    },
    {
        timestamps: true
    }
);
const Schedule =  mongoose.model("Schedule", ScheduleSchema);
module.exports = Schedule;
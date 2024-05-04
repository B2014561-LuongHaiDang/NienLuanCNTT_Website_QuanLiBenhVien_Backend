const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true},
        cccd: { type: Number, require: true},
        password: { type: String, require: true},
        isAdmin: { type: Boolean, default: false},
        avatar: { type: String},
    },
    {
        timestamps: true
    }
);
const User =  mongoose.model("User", userSchema);
module.exports = User;
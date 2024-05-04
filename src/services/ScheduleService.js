
const Schedule = require("../models/Schedule.js")
const bcrypt = require("bcrypt")

const createSchedule = (newSchedule) => {
    return new Promise(async (resolve, reject) => {
        const { day, userId, doctorId, status, birthday, phone, address } = newSchedule
        try {
            const createdSchedule = await Schedule.create({
                day,
                userId,
                doctorId ,
                status,
                birthday,
                phone,
                address
            })
            if (createdSchedule) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdSchedule
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateSchedule = (id, status) => {
    return new Promise(async (resolve, reject) => {
        try {    
        const updateSchedule = await Schedule.findByIdAndUpdate(id, {status}, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateSchedule
            })
            // }
        } catch (e) {
            reject(e)
        }
    })
}



const getAllSchedule = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allSchedule = await Schedule.find().populate('userId').populate('doctorId')
            resolve({
                status: 'OK',
                message: 'Get all Schedule success',
                data: allSchedule 
            })
            
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsSchedule = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const schedule = await Schedule.findOne({
                _id: id
            })
            resolve({
                status: 'OK',
                message: 'Success',
                data: schedule
            })
            // }
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createSchedule,
    updateSchedule,
    getAllSchedule,
    getDetailsSchedule
}
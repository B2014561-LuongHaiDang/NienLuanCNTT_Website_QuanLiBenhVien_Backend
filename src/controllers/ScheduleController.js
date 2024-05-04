const ScheduleService = require('../services/ScheduleService')
const createSchedule = async (req, res) => {
    try {
        const response = await ScheduleService.createSchedule(req.body)
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id
        const status = req.body.status
        if(!scheduleId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The scheduleId is required'
            })
        }
        const response = await ScheduleService.updateSchedule(scheduleId, status)
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllSchedule = async (req, res) => {
    try {
        const response = await ScheduleService.getAllSchedule()
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id

        if(!scheduleId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The scheduleId is required'
            })
        }
        const response = await ScheduleService.getDetailsSchedule(scheduleId)
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createSchedule,
    updateSchedule,
    getAllSchedule,
    getDetailsSchedule
}
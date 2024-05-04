const UserRouter = require('./UserRouter')
const DoctorRouter = require('./DoctorRouter')
const ScheduleRouter = require('./ScheduleRouter')
const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/doctor', DoctorRouter)
    app.use('/api/schedule', ScheduleRouter)
}

module.exports = routes
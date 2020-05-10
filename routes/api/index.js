const router = require('express').Router()
const workoutRoutes = require('./workouts')

// Post routes
router.use('/workouts', workoutRoutes)

module.exports = router

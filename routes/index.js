const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')

// API Routes
router.use('/api', apiRoutes)

// If no API routes are hit, send the React app
router.route('/').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.route('/exercise').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
})
router.route('/stats').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router

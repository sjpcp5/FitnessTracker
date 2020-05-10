const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
app.use(express.static('public'))
const db = require('./models')
// Add routes, both API and view
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})

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

// Add routes, both API and view
app.use(routes)

mongoose.Promise = global.Promise
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://mongodb://<dbuser>:<dbpassword>@ds161134.mlab.com:61134/heroku_89g3tc9h',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})

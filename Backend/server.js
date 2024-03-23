// Load environment variables from a .env file into process.env
require('dotenv').config()

// Import required modules
const express = require('express') // Import Express.js framework
const mongoose = require('mongoose') // Import Mongoose for MongoDB interaction
const cors = require('cors') // Import CORS middleware for cross-origin resource sharing

// Create an Express application
const app = express()

// Connect to MongoDB using the URI specified in the environment variables
mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection

// Database connection event listeners
db.on('error', (error) => console.error(error)) // Log any errors that occur during the database connection
db.once('open', () => console.log('Connected to CourierTnM DATABASE')) // Log a message once the database connection is open

// Enable CORS for all routes
app.use(cors())
app.options('*', cors())

// Parse incoming requests with JSON payloads
app.use(express.json())


// Middleware to log incoming requests
app.get('*', function (req, res, next) {
  console.log('Request was made to: ' + req.originalUrl)
  return next()
})
app.post('*', function (req, res, next) {
  console.log('Request was made to: ' + req.originalUrl)
  return next()
})
app.put('*', function (req, res, next) {
  console.log('Request was made to: ' + req.originalUrl)
  return next()
})
app.patch('*', function (req, res, next) {
  console.log('Request was made to: ' + req.originalUrl)
  return next()
})


// Import and use the API routes from the specified file
const apis = require('./routes/api')
app.use('/api', apis)

// Set the server port to the specified environment variable or default to port 4545
const port = process.env.PORT || '4545'

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => console.log('Server started at port 4545'))


const express = require('express')
const bodyParser = require('body-parser')
const moviesRouter = require('./routes/movies')

// Create server
const server = express()

// Use Middleware
server.use(bodyParser.json())

// Add routes
server.use(moviesRouter)

// Start server at localhost:7000
const port = 7000
  server.listen(port, () => {
    console.log(`Start on localhost:${port}`)
  })
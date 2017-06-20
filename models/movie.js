const mongoose = require('mongoose')
require('./init')

// Create new schema
const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  yearReleased: Number
})

// Create model
//  Uppercase Model = Class, lowercase model = method
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
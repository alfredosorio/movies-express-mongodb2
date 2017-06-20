const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

// Read collection - using promises and catch errors. Note that only one of two routes will be run.
router.get('/movies', (req, res) => {
  Movie.find()
    // Happy path
    .then(movies => {
      res.json(movies)
    })
    // Unhappy path
    .catch(error => {
      res.status(500).json({ error: error })
    })
})

// Read single movie
router.get('/movies/:id', (req, res) => {
  const id = req.params.id
  Movie.findById(id)
    .then(movie => {
      res.json(movie)
    })
    .catch(error => {
      res.status(404).json({ error: error })
    })
})

// Create single movie
router.post('/movies', (req, res) => {
  const newMovie = req.body
  Movie.create(newMovie)
    .then(movie => {
      res.json(movie)
    })
    .catch(error => {
      res.status(500).json({ error: error })
    })
})

// Update single movie by id URL query
router.put('/movies/:id', (req, res) => {
  const id = req.params.id
  const updatedMovie = req.body
  Movie.findByIdAndUpdate(id, updatedMovie)
    .then(movie => {
      res.json(updatedMovie)
    })
    .catch(error => {
      res.status(204).json({ error: error })
    })
})

// Delete
router.delete('/movies/:id', (req, res) => {
  const id = req.params.id
  Movie.findByIdAndRemove(id)
    .then(movie => {
      res(console.log('Successfully deleted.'))
    })
    .catch(error => {
      res.status(204).json({ error: error })
    })
})

module.exports = router
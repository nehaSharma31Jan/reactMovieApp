const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies');
const authMiddleware = require('../utils/jwt');

// Get all movies
router.get('/', moviesController.getMovies);

// Get movie by id
router.get('/:id' , authMiddleware, moviesController.getMovieById);

// Add new movie (require authentication)
router.post('/', authMiddleware, moviesController.createMovie);

// Update movie (require authentication)
router.put('/:id', authMiddleware, moviesController.updateMovie);

// Delete movie (require authentication)
router.delete('/:_id', authMiddleware, moviesController.deleteMovie);

module.exports = router;

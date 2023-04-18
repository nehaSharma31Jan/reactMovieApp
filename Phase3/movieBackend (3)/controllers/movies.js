const Movie = require('../models/movie');
const uuid = require('uuid');
// Create a new movie
exports.createMovie = async (req, res) => {
  try {

    const movie = new Movie(req.body);
    movie._id = uuid.v4();
    await movie.save();
    res.status(201).json({ message: "Movie created successfully", movie });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update a movie by ID
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete a movie by Name
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params._id);
     // const movie = await Movie.find({'name':req.params.name});
     //await Movie.findByIdAndDelete({_id:movie._id});
    //  await Movie.findByIdAndDelete({ _id : mongoose.Types.ObjectId(movie._id)});
      console.log(movie);
      console.log(req.params._id);
    
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully", movie });
  } catch (error) {
    res.status(500).json({ error });
  }
};

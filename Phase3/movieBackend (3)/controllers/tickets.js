const Movie = require('../models/movie');

// Book a ticket for a movie
exports.bookTicket = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const showtime = movie.showtimes.id(req.body.showtimeId);
    if (!showtime) {
      return res.status(404).json({ message: "Showtime not found" });
    }

    const seat = showtime.seats.id(req.body.seatId);
    if (!seat) {
      return res.status(404).json({ message: "Seat not found" });
    }
    if (!seat.available) {
      return res.status(400).json({ message: "Seat not available" });
    }

    seat.available = false;
    await movie.save();
    res.status(200).json({ message: "Ticket booked successfully", movie });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Cancel a booked ticket for a movie
exports.cancelTicket = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const showtime = movie.showtimes.id(req.body.showtimeId);
    if (!showtime) {
      return res.status(404).json({ message: "Showtime not found" });
    }

    const seat = showtime.seats.id(req.body.seatId);
    if (!seat) {
      return res.status(404).json({ message: "Seat not found" });
    }
    if (seat.available) {
      return res.status(400).json({ message: "Seat already available" });
    }

    seat.available = true;
    await movie.save();
    res.status(200).json({ message: "Ticket canceled successfully", movie });
  } catch (error) {
    res.status(500).json({ error });
  }
};

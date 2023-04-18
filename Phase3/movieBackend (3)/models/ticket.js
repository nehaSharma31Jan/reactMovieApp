const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true
  },
  showTime: {
    type: Date,
    required: true
  },
  seats: {
    type: [Number],
    required: true
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Ticket", TicketSchema);

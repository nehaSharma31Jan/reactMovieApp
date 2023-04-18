const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  row: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false
  }
});

const showtimeSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  seats: [seatSchema]
});

const movieSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  showtimes: [showtimeSchema]
});

module.exports = mongoose.model("Movie", movieSchema);

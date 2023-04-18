const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('./utils/jwt');

const config = require('./config/db');
const moviesRoutes = require('./routes/movies');
const ticketsRoutes = require('./routes/tickets');
const usersRoutes = require('./routes/users');
const dotenv=require('dotenv');
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:admin@admin.mshanj6.mongodb.net/onlinemovieticket", {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

mongoose.connection.on('connected', () => {
  console.log('Connected to database ');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Middleware
app.use(cors());

app.use(bodyParser.json());

// JWT authentication middleware
//app.use(jwt.verifyToken);

// Routes
app.use('/movies', moviesRoutes);
app.use('/tickets', ticketsRoutes);
app.use('/users', usersRoutes);

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});

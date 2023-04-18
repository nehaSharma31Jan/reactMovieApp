const express = require('express');
const moviesRoutes = require('./movies');
const ticketsRoutes = require('./tickets');
const usersRoutes = require('./users');
const jwt = require('../utils/jwt');

const router = express.Router();
const app = express()

router.use('/movies',  moviesRoutes);
router.use('/tickets', ticketsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
app.listen(4000);
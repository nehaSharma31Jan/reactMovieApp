const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const User = require('../models/user');

// Register a new user
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if the required fields are present
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check if the user already exists
  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      password
    });
    newUser.save().then(user => {
      jwt.sign(
        { id: user.id },
        config.secret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

// Authenticate an existing user
router.post('/authenticate', (req, res) => {
  const { email, password } = req.body;

  // Check if the required fields are present
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check if the user exists
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }
    console.log('e: '+email);

    // Compare the password
    bcrypt.compare(password, user.password).then(isMatch => {

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      jwt.sign(
        { id: user.id },
        config.secret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

module.exports = router;

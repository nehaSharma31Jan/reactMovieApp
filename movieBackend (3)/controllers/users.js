const User = require('../models/user');
const jwt = require('../utils/jwt');

// Register a new user
exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Email or password is incorrect' });
    }
    const isPasswordValid = await user.validatePassword(req.body.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Email or password is incorrect' });
    }
    const token = jwt.sign({ id: user._id });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

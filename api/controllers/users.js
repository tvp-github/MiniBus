const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Models
const User = require('../models/User');

async function verifyToken(req, res) {
  try {
    const user = await User.findById(req.user.id);
    if (users) {
      res.json({ user });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'User Does Not Exist'
    });
  }
}

async function register(req, res) {
  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create user
    const newUser = new User({
      username: req.body.username,
      password: hashPassword,
      phone: req.body.phone
    });
    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).json({
      msg: "Server Error"
    });
  }
}

async function login(req, res) {
  try {
    const { username, password } = await req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error();
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Create token
      const token = jwt.sign(
        { id: user._id },
        'mini-bus',
        { expiresIn: 1800 }
      );

      res.json({ user, token });
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(400).json({
      msg: 'Invalid Credentials'
    });
  }
}

module.exports = {
  verifyToken,
  register,
  login
}
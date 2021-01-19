const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Models
const Admin = require('../../../models/Admin');

async function verifyToken(req, res) {
  try {
    const admin = await Admin.findById(req.admin.id);
    if (admin) {
      res.json({ admin });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Admin Does Not Exist'
    });
  }
}

async function login(req, res) {
  console.log("Go to login");
  try {
    // const { username, password } = req.body;
    // console.log(username, password);
    const username = "haile";
    const password = "123456";
    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error();
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (isMatch) {
      // Create token
      const token = jwt.sign(
        { id: admin._id },
        "the_fucking_app",
        { expiresIn: 1800 }
      );

      res.json({ admin, token });
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).json({
      msg: 'Invalid Credentials'
    });
  }
}

module.exports = {
  verifyToken,
  login
}
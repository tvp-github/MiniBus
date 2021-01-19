const router = require('express').Router();

// Middleware
const auth = require('./middleware/auth');
// Controllers
const authCtrl = require('./controllers/auth');

// Create admin (testing)
if (process.env.NODE_ENV != 'production') {
  const bcrypt = require('bcrypt');
  // Model
  const Admin = require('../../models/Admin');

  router.post('/', async (req, res) => {
    try {
      const { username, password } = req.body;
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      // Create admin
      const newAdmin = new Admin({
        username,
        password: hashPassword,
      });
      await newAdmin.save();

      res.status(201).json({
        admin: newAdmin
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        msg: 'Server Error'
      });
    }
  });
}

router.route('/auth')
  .get(auth, authCtrl.verifyToken)
  .post(authCtrl.login)
  .put()
  .delete();

module.exports = router;
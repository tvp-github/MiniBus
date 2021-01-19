const router = require('express').Router();

// Middleware
const auth = require('../middleware/auth');
// Controllers
const authCtrl = require('../controllers/users');

router.route('/')
  .get()
  .post(auth, authCtrl.register)
  .put()
  .delete();

router.route('/auth')
  .get(auth, authCtrl.verifyToken)
  .post(authCtrl.login)
  .put()
  .delete();

module.exports = router;
const router = require('express').Router();

// Middleware
const auth = require('../middleware/auth');
// Controllers
const cusCtrl = require('../controllers/customers');

router.route('/')
  .get(cusCtrl.getCustomers)
  .post()
  .put()
  .delete();

router.route('/:id')
  .get(cusCtrl.getCustomerById)
  .post()
  .put(auth, cusCtrl.updateCustomerById)
  .delete(auth, cusCtrl.deleteCustomerById);

module.exports = router;
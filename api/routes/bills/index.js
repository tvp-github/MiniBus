const router = require('express').Router();

// Middleware
const auth = require('../users/middleware/auth');
// Controllers
const billCtrl = require('./controllers/bills');

router.route('/')
  .get(auth, billCtrl.getBills)
  .post(auth, billCtrl.createBill)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put(auth, billCtrl.updateBillById)
  .delete(auth, billCtrl.deleteBillById);

module.exports = router;
const router = require('express').Router();

// Middleware
const auth = require('../middleware/auth');
// Controllers
const billCtrl = require('../controllers/bills');

router.route('/')
  .get(billCtrl.getBills)
  .post(auth, billCtrl.createBill)
  .put()
  .delete();

router.route('/:id')
  .get(billCtrl.getBillById)
  .post()
  .put(auth, billCtrl.updateBillById)
  .delete(auth, billCtrl.deleteBillById);

module.exports = router;

const router = require('express').Router();
const auth = require('../middleware/auth');

// Controllers
const trpCtrl = require('../controllers/trips');

router.route('/')
  .get(trpCtrl.getTrips)
  .post(auth, trpCtrl.createTrip)
  .put()
  .delete();

router.route('/:id')
  .get(trpCtrl.getTripById)
  .post()
  .put(auth, trpCtrl.updateTripById)
  .delete(trpCtrl.deleteTripById);

module.exports = router;

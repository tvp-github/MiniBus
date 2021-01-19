const router = require('express').Router();

// Controllers
const trpCtrl = require('../controllers/trips');

router.route('/')
  .get(trpCtrl.getTrips)
  .post(trpCtrl.createTrip)
  .put()
  .delete();

router.route('/:id')
  .get(trpCtrl.getTripById)
  .post()
  .put(trpCtrl.updateTripById)
  .delete(trpCtrl.deleteTripById);

module.exports = router;

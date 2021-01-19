const router = require('express').Router();

// Middleware
const auth = require('../users/middleware/auth');
// Controllers
const trpCtrl = require('./controllers/trips');

router.route('/')
  .get(auth, trpCtrl.getTrips)
  .post(auth, trpCtrl.createTrip)
  .put()
  .delete();

router.route('/:id')
  .get(auth, trpCtrl.getTripById)
  .post()
  .put(auth, trpCtrl.updateTripById)
  .delete(auth, trpCtrl.deleteTripById);

module.exports = router;

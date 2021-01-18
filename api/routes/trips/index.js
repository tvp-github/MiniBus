const router = require('express').Router();

// Middleware
const auth = require('../users/middlewares/auth');
// Controllers
const trpCtrl = require('./controllers/trips');

router.route('/')
  .get(auth, trpCtrl.getTrips)
  .post(auth, trpCtrl.createTrip)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put(auth, trpCtrl.updateTripById)
  .delete(auth, trpCtrl.deleteTripById);

module.exports = router;
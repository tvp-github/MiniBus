const router = require('express').Router();

// Middleware
const auth = require('../users/middleware/auth');
// Controllers
const ticCtrl = require('./controllers/tickets');

router.route('/')
  .get(auth, ticCtrl.getTrips)
  .post(auth, ticCtrl.createTrip)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put(auth, ticCtrl.updateTripById)
  .delete(auth, ticCtrl.deleteTripById);

module.exports = router;
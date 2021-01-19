const router = require('express').Router();

// Middleware
const auth = require('../users/middleware/auth');
// Controllers
const vhcCtrl = require('./controllers/vehicles');

router.route('/')
  .get(auth, vhcCtrl.getVehicles)
  .post(auth, vhcCtrl.createVehicle)
  .put()
  .delete();

router.route('/:id')
  .get(auth, vhcCtrl.getVehicleById)
  .post()
  .put(auth, vhcCtrl.updateVehicleById)
  .delete(auth, vhcCtrl.deleteVehicleById);

module.exports = router;

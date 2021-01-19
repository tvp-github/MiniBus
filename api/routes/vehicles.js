const router = require('express').Router();

// Middleware
const auth = require('../middleware/auth');
// Controllers
const vhcCtrl = require('../controllers/vehicles');

router.route('/')
  .get(vhcCtrl.getVehicles)
  .post(auth, vhcCtrl.createVehicle)
  .put()
  .delete();

router.route('/:id')
  .get(vhcCtrl.getVehicleById)
  .post()
  .put(auth, vhcCtrl.updateVehicleById)
  .delete(auth, vhcCtrl.deleteVehicleById);

module.exports = router;

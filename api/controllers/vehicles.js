// Models
const Vehicle = require('../models/Vehicle');

async function getVehicles(req, res) {
  try {
    const vehicles = await Vehicle.find();
    if (vehicles) {
      res.json({ vehicles });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Vehicles Do Not Exist'
    });
  }
}

async function getVehicleById(req, res) {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle) {
      res.json({ vehicle });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Vehicle Does Not Exist'
    });
  }
}

async function createVehicle(req, res) {
  try {
    console.log(req.body);
    // Create vehicle
    const newVehicle = new Vehicle({
      type: req.body.type
    });
    await newVehicle.save();

    res.status(201).json({
      vehicle: newVehicle
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function updateVehicleById(req, res) {
  try {
    await Vehicle.findByIdAndUpdate(req.params.id, {
      type: req.body.type
    });

    res.json({
      msg: 'Update vehicle success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function deleteVehicleById(req, res) {
  try {
    await Vehicle.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Delete vehicle success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}


module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicleById,
  deleteVehicleById
}
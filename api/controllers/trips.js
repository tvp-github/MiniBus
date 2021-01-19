// Models
const Trip = require('../models/Trip');

async function getTrips(req, res) {
  try {
    const trips = await Trip.find().populate('vehicle');
    if (trips) {
      res.json({ trips });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Trips Do Not Exist'
    });
  }
}

async function getTripById(req, res) {
  try {
    const trip = await Trip.findById(req.params.id).populate('vehicle');
    if (trip) {
      res.json({ trip });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Trip Does Not Exist'
    });
  }
}

async function createTrip(req, res) {
  try {
    // Create trip
    const newTrip = new Trip(req.body);
    await newTrip.save();

    res.status(201).json({
      trip: newTrip
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function updateTripById(req, res) {
  try {
    await Trip.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      msg: 'Update trip success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function deleteTripById(req, res) {
  try {
    await Trip.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Delete trip success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}


module.exports = {
  getTrips,
  getTripById,
  createTrip,
  updateTripById,
  deleteTripById
}
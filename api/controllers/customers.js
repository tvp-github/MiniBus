// Models
const Customer = require('../models/Customer');

async function getCustomers(req, res) {
  try {
    const customers = await Customer.find();
    res.json({ customers });
  } catch (err) {
    res.status(404).json({
      msg: 'Customers Do Not Exist'
    });
  }
}

async function getCustomerById(req, res) {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer) {
      res.json({ customer });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Customer Does Not Exist'
    });
  }
}

async function updateCustomerById(req, res) {
  try {
    await Customer.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      msg: 'Update customer success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function deleteCustomerById(req, res) {
  try {
    await Customer.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Delete customer success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}


module.exports = {
  getCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById
}
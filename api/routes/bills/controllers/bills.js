// Models
const Bill = require('../../../models/Bill');

async function getBills(req, res) {
  try {
    const bills = await Bill.find();
    if (bills) {
      res.json({ bills });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Bills Do Not Exist'
    });
  }
}

async function getBillById(req, res) {
  try {
    const bill = await Bill.findById(req.params.id);
    if (bill) {
      res.json({ bill });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Bill Does Not Exist'
    });
  }
}

async function createBill(req, res) {
  try {
    // Create bill
    const newBill = new Bill(req.body);
    await newBill.save();

    res.status(201).json({
      bill: newBill
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function updateBillById(req, res) {
  try {
    await Bill.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      msg: 'Update bill success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function deleteBillById(req, res) {
  try {
    await Bill.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Delete bill success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}


module.exports = {
  getBills,
  getBillById,
  createBill,
  updateBillById,
  deleteBillById
}
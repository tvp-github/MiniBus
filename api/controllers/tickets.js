// Models
const Ticket = require('../models/Ticket');

async function getTickets(req, res) {
  try {
    const tickets = await Ticket.find().populate('trip');
    res.json({ tickets });
  } catch (err) {
    res.status(404).json({
      msg: 'Tickets Do Not Exist'
    });
  }
}

async function getTicketsWhereTripId(req, res) {
  try {
    const tickets = await Ticket.find().populate('trip');
    
    const obj = Array.from(tickets).filter((ticket) => 
      (ticket.trip && ticket.trip._id == req.params.id)
    );

    res.json({ tickets: obj });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Tickets do not exist'
    });
  }
}

async function getTicketById(req, res) {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('trip');
    if (ticket) {
      res.json({ ticket });
    }
  } catch (err) {
    res.status(404).json({
      msg: 'Ticket Does Not Exist'
    });
  }
}

async function createTicket(req, res) {
  try {
    // Create ticket
    console.log(req.body);
    const newTicket = new Ticket(req.body);
    await newTicket.save();

    res.status(201).json({
      ticket: newTicket
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function updateTicketById(req, res) {
  console.log("update ticket");
  try {
    await Ticket.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      msg: 'Update ticket success'
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Server error'
    });
  }
}

async function deleteTicketById(req, res) {
  try {
    await Ticket.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Delete ticket success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Server error'
    });
  }
}


module.exports = {
  getTickets,
  getTicketById,
  getTicketsWhereTripId,
  createTicket,
  updateTicketById,
  deleteTicketById
}

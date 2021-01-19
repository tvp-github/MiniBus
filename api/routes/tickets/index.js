const router = require('express').Router();

// Middleware
const auth = require('../users/middleware/auth');
// Controllers
const ticCtrl = require('./controllers/tickets');

router.route('/')
  .get(auth, ticCtrl.getTickets)
  .post(auth, ticCtrl.createTicket)
  .put()
  .delete();

router.route('/:id')
  .get(auth, ticCtrl.getTicketById)
  .post()
  .put(auth, ticCtrl.updateTicketById)
  .delete(auth, ticCtrl.deleteTicketById);

module.exports = router;

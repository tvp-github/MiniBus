const router = require('express').Router();

// Middleware
const auth = require('../middleware/auth');
// Controllers
const ticCtrl = require('../controllers/tickets');

router.route('/')
  .get(ticCtrl.getTickets)
  .post(auth, ticCtrl.createTicket)
  .put()
  .delete();

router.route('/:id')
  .get(ticCtrl.getTicketById)
  .post()
  .put(ticCtrl.updateTicketById)
  .delete(auth, ticCtrl.deleteTicketById);

router.route('/trip/:id')
  .get(ticCtrl.getTicketsWhereTripId)
  .post()
  .put()
  .delete();

module.exports = router;

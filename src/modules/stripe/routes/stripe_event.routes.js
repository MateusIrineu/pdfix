const express = require('express');
const router = express.Router();
const stripeEventController = require('../controllers/stripe_event.controller');

router.get('/', stripeEventController.getAll);
router.get('/:id', stripeEventController.getById);
router.post('/', stripeEventController.create);
router.put('/:id', stripeEventController.update);
router.delete('/:id', stripeEventController.remove);

module.exports = router;

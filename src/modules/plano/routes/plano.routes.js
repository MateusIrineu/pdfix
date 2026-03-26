const express = require('express');
const router = express.Router();
const planoController = require('../controllers/plano.controller');

router.get('/', planoController.getAll);
router.get('/:id', planoController.getById);
router.post('/', planoController.create);
router.put('/:id', planoController.update);
router.delete('/:id', planoController.remove);

module.exports = router;

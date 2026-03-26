const StripeEvent = require('../models/stripe_event.model');

module.exports = {
  async getAll(req, res) {
    const events = await StripeEvent.findAll();
    res.json(events);
  },
  async getById(req, res) {
    const event = await StripeEvent.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json(event);
  },
  async create(req, res) {
    const event = await StripeEvent.create(req.body);
    res.status(201).json(event);
  },
  async update(req, res) {
    const event = await StripeEvent.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Evento não encontrado' });
    await event.update(req.body);
    res.json(event);
  },
  async remove(req, res) {
    const event = await StripeEvent.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Evento não encontrado' });
    await event.destroy();
    res.status(204).send();
  },
};

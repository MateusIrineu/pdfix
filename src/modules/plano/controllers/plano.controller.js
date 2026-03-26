const Plano = require('../models/plano.model');

module.exports = {
  async getAll(req, res) {
    const planos = await Plano.findAll();
    res.json(planos);
  },
  async getById(req, res) {
    const plano = await Plano.findByPk(req.params.id);
    if (!plano) return res.status(404).json({ error: 'Plano não encontrado' });
    res.json(plano);
  },
  async create(req, res) {
    const plano = await Plano.create(req.body);
    res.status(201).json(plano);
  },
  async update(req, res) {
    const plano = await Plano.findByPk(req.params.id);
    if (!plano) return res.status(404).json({ error: 'Plano não encontrado' });
    await plano.update(req.body);
    res.json(plano);
  },
  async remove(req, res) {
    const plano = await Plano.findByPk(req.params.id);
    if (!plano) return res.status(404).json({ error: 'Plano não encontrado' });
    await plano.destroy();
    res.status(204).send();
  },
};

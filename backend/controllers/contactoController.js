// backend/controllers/contactoController.js
const Contacto = require('../models/contactoModel');

exports.listar = (req, res) => {
  Contacto.getAll((err, contactos) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(contactos);
  });
};

exports.obtener = (req, res) => {
  Contacto.getById(req.params.id, (err, contacto) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!contacto) return res.status(404).json({ error: 'No encontrado' });
    res.json(contacto);
  });
};

exports.crear = (req, res) => {
  Contacto.create(req.body, (err, contacto) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(contacto);
  });
};

exports.actualizar = (req, res) => {
  Contacto.update(req.params.id, req.body, (err, contacto) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(contacto);
  });
};

exports.eliminar = (req, res) => {
  Contacto.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Contacto eliminado' });
  });
};

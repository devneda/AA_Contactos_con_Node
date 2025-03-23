// backend/controllers/authController.js
const Usuario = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;

  Usuario.buscarPorUsername(username, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

    const esValido = Usuario.validarPassword(password, user.password);
    if (!esValido) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ mensaje: 'Login correcto', token });
  });
};

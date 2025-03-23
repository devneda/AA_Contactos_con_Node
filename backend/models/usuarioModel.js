// backend/models/usuarioModel.js
const db = require('../database/db');
const bcrypt = require('bcryptjs');

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

const Usuario = {
  crear: (username, passwordPlano, callback) => {
    const hash = bcrypt.hashSync(passwordPlano, 10);
    db.run(
      'INSERT INTO usuarios (username, password) VALUES (?, ?)',
      [username, hash],
      function (err) {
        callback(err, { id: this.lastID, username });
      }
    );
  },

  buscarPorUsername: (username, callback) => {
    db.get('SELECT * FROM usuarios WHERE username = ?', [username], callback);
  },

  validarPassword: (passwordPlano, hashAlmacenado) => {
    return bcrypt.compareSync(passwordPlano, hashAlmacenado);
  },
};

module.exports = Usuario;

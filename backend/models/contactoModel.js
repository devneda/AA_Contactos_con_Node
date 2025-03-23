// backend/models/contactoModel.js
const db = require('../database/db');

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    telefono TEXT NOT NULL,
    email TEXT,
    favorito INTEGER DEFAULT 0
  )
`);

const Contacto = {
  getAll: (callback) => {
    db.all('SELECT * FROM contactos', callback);
  },

  getById: (id, callback) => {
    db.get('SELECT * FROM contactos WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { nombre, telefono, email, favorito } = data;
    db.run(
      'INSERT INTO contactos (nombre, telefono, email, favorito) VALUES (?, ?, ?, ?)',
      [nombre, telefono, email, favorito || 0],
      function (err) {
        callback(err, { id: this.lastID, ...data });
      }
    );
  },

  update: (id, data, callback) => {
    const { nombre, telefono, email, favorito } = data;
    db.run(
      'UPDATE contactos SET nombre = ?, telefono = ?, email = ?, favorito = ? WHERE id = ?',
      [nombre, telefono, email, favorito, id],
      function (err) {
        callback(err, { id, ...data });
      }
    );
  },

  delete: (id, callback) => {
    db.run('DELETE FROM contactos WHERE id = ?', [id], callback);
  },
};

module.exports = Contacto;

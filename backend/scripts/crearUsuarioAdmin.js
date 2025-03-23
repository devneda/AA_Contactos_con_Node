// backend/scripts/crearUsuarioAdmin.js
const Usuario = require('../models/usuarioModel');

Usuario.crear('admin', 'admin123', (err, user) => {
  if (err) {
    console.error('❌ Error al crear usuario:', err.message);
  } else {
    console.log('✅ Usuario creado:', user);
  }
});

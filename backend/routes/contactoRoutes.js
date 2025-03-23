// backend/routes/contactoRoutes.js
const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');
const auth = require('../middleware/authMiddleware');
const { validarContacto } = require('../validators/contactoValidator');
const validar = require('../middleware/validacionMiddleware');

router.use(auth);

// CRUD
router.get('/', contactoController.listar);
router.get('/:id', contactoController.obtener);
router.post('/', contactoController.crear);
router.put('/:id', contactoController.actualizar);
router.delete('/:id', contactoController.eliminar);

module.exports = router;

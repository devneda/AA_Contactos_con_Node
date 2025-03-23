// backend/validators/contactoValidator.js
const { body } = require('express-validator');

exports.validarContacto = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

  body('telefono')
    .notEmpty().withMessage('El teléfono es obligatorio')
    .matches(/^[0-9\s+()-]+$/).withMessage('El teléfono contiene caracteres no válidos'),

  body('email')
    .optional()
    .isEmail().withMessage('El email no tiene un formato válido'),

  body('favorito')
    .optional()
    .isInt({ min: 0, max: 1 }).withMessage('Favorito debe ser 0 o 1'),
];

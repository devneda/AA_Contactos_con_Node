// backend/middleware/validacionMiddleware.js
const { validationResult } = require('express-validator');

module.exports = function (req, res, next) {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  next();
};

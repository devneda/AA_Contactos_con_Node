// backend/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const contactoRoutes = require('./routes/contactoRoutes');
const authRoutes = require('./routes/authRoutes');

// Configuración de variables de entorno
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/contactos', contactoRoutes);
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API Libreta de Contactos funcionando ✔️');
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend iniciado en http://localhost:${PORT}`);
});

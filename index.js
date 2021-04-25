const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear servidor express
const app = express();

// Conexión a bbdd
dbConnection();

// MIDDLEWAREs
// Cors
app.use(cors());

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));


app.listen(process.env.PORT, () => {
  console.log('Backend ejecutandose en puerto ' + process.env.PORT);
});
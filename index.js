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
//Lectura y parseo del body
app.use(express.json());
// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/busquedaGlobal', require('./routes/busquedas'));
app.use('/api/login', require('./routes/auth'));


app.listen(process.env.PORT, () => {
  console.log('Backend ejecutandose en puerto ' + process.env.PORT);
});
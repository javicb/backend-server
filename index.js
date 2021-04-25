const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear servidor express
const app = express();

// Conexión a bbdd
dbConnection();

// Rutas
app.get('/', (request, response) => {
  response.json({
    ok: true,
    msg: 'Hola mundo'
  })
});

app.listen(process.env.PORT, () => {
  console.log('Backend ejecutandose en puerto ' + process.env.PORT);
});
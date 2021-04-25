const express = require('express');
const { dbConnection } = require('./db/config');

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

app.listen(3000, () => {
  console.log('Backend ejecutandose en puerto 3000');
});
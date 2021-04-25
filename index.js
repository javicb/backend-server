const express = require('express');

// Crear servidor express
const app = express();

// RUgas
app.get('/', (request, response) => {
  response.json({
    ok: true,
    msg: 'Hola mundo'
  })
});

app.listen(3000, () => {
  console.log('servidor levantado en puertooo: 3000');
});
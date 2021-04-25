const Usuario = require('../models/usuario');

const getUsuarios = (request, response) => {
  response.json({
    ok: true,
    msg: 'getUsuarios'
  })
}

const crearUsuario = async (request, response) => {

  const usuario = new Usuario(request.body);

  await usuario.save();

  response.json({
    ok: true,
    usuario
  })
}

module.exports = {
  getUsuarios,
  crearUsuario
}
const Usuario = require('../models/usuario');

const getUsuarios = async (request, response) => {

  const usuarios = await Usuario.find({}, 'nombre email role');

  response.json({
    ok: true,
    usuarios
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
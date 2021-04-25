const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

const getUsuarios = async (request, resp = response) => {

  const usuarios = await Usuario.find({}, 'nombre email role');


  resp.json({
    ok: true,
    usuarios
  })
}

const crearUsuario = async (request, resp = response) => {

  const { email, password } = request.body;

  try {
    const existeEmail = await Usuario.findOne({ email })

    if (existeEmail) {
      return resp.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario registrado con ese correo'
      });
    }

    const usuario = new Usuario(request.body);

    // Encriptar pass
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    // Guardar usuario
    await usuario.save();

    resp.json({
      ok: true,
      usuario
    })
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs'
    });
  }
}

module.exports = {
  getUsuarios,
  crearUsuario
}
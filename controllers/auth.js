const { response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require("../models/usuario");

const login = async (request, resp = response) => {

  const { email, password } = request.body;

  try {

    // Verificar email
    const usuarioDB = await Usuario.findOne({ email });
    if (!usuarioDB) {
      return resp.status(404).json({
        ok: false,
        msg: 'Email no válido'
      });
    }

    // Verificar password
    const validPass = bcrypt.compareSync(password, usuarioDB.password);
    if (!validPass) {
      return resp.status(400).json({
        ok: false,
        msg: 'Password no válido'
      });
    }

    resp.json({
      ok: true,
      msg: 'Login...'
    })
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs'
    })
  }
}

module.exports = {
  login
}
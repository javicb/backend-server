const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


// Obtener usuarios
const getUsuarios = async (request, resp = response) => {

  const usuarios = await Usuario.find({}, 'nombre email role');

  resp.json({
    ok: true,
    usuarios,
    id: request.id
  })
}


// Crear nuevo usuario
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

    const nuevoUsuario = new Usuario(request.body);

    // Encriptar pass
    const salt = bcrypt.genSaltSync();
    nuevoUsuario.password = bcrypt.hashSync(password, salt);

    // Guardar usuario
    await nuevoUsuario.save();

    // Generar JWT
    const token = await generarJWT(nuevoUsuario.id);

    resp.json({
      ok: true,
      nuevoUsuario,
      token
    })
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs'
    });
  }
}


// Actualizar usuario
const updateUsuario = async (request, resp = response) => {

  const id = request.params.id;

  try {

    const usuarioDB = await Usuario.findById(id);
    if (!usuarioDB) {
      return resp.status(404).json({
        ok: false,
        msn: 'No existe ese usuario'
      })
    }

    const { password, googee, email, ...campos } = request.body;

    if (usuarioDB.email !== email) {
      const existeEmail = await Usuario.findOne({ email });
      if (existeEmail) {
        return resp.status(400).json({
          ok: false,
          msg: 'Ya existe un usuario con ese email'
        })
      }
    }
    campos.email = email;

    // Actualizar usuario
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, campos, { new: true });

    resp.json({
      ok: true,
      usuario: usuarioActualizado
    })
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs'
    });
  }
}

// Borrado de usuario
const delteUsuario = async (request, resp = response) => {
  const id = request.params.id;

  try {
    const usuarioDB = await Usuario.findById(id);
    if (!usuarioDB) {
      return resp.status(404).json({
        ok: false,
        msn: 'No existe ese usuario'
      })
    }

    // Borrar usuario
    await Usuario.findByIdAndDelete(id);


    resp.json({
      ok: true,
      msg: 'Usuario eliminado'
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
  crearUsuario,
  updateUsuario,
  delteUsuario
}
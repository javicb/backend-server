const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (request, resp = response, next) => {

  // Leer el token
  const token = request.header('x-token');

  if (!token) {
    return resp.status(401).json({
      ok: false,
      msg: 'No existe token'
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    request.id = uid;
    next();
  } catch (error) {
    return resp.status(401).json({
      ok: false,
      msg: 'Token no válido'
    })
  }

}

module.exports = {
  validarJWT
}
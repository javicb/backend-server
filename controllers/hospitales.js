const { response } = require("express");

// Obtener hospitales
const getHospitales = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'getHospitales'
  })
}

// Crear nuevo hospital
const crearHospital = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'crearHospital'
  })
}

// Actualizar hospital
const updateHospital = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'updateHospital'
  })
}

// Borrar hospital
const deleteHospital = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'deleteHospital'
  })
}


module.exports = {
  getHospitales,
  crearHospital,
  updateHospital,
  deleteHospital
}
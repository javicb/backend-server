const { response } = require("express");

// Obtener médicos
const getMedicos = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'getMedicos'
  })
}

// Crear nuevo médico
const crearMedico = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'crearMedico'
  })
}

// Actualizar hospital
const updateMedico = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'updateMedico'
  })
}

// Borrar hospital
const deleteMedico = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'deleteMedico'
  })
}


module.exports = {
  getMedicos,
  crearMedico,
  updateMedico,
  deleteMedico
}
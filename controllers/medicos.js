const { response } = require("express");
const Medico = require("../models/medico");

// Obtener médicos
const getMedicos = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'getMedicos'
  })
}

// Crear nuevo médico
const crearMedico = async (request, resp = response) => {

  const id = request.id;
  const medico = new Medico({
    usuario: id,
    ...request.body
  });

  try {
    const nuevoMedico = await medico.save();

    resp.json({
      ok: true,
      nuevoMedico
    })
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs'
    });
  }
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
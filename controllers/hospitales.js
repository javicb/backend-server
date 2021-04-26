const { response } = require('express');
const Hospital = require('../models/hospital')

// Obtener hospitales
const getHospitales = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'getHospitales'
  })
}

// Crear nuevo hospital
const crearHospital = async (request, resp = response) => {

  const id = request.id;
  const hospital = new Hospital({
    usuario: id,
    ...request.body
  });

  try {
    const nuevoHospital = await hospital.save();

    resp.json({
      ok: true,
      nuevoHospital
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
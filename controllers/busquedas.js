const { response } = require("express");
const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const getSearchGlobal = async (request, resp = response) => {
  const busqueda = request.params.busqueda;
  const regex = new RegExp(busqueda, 'i');


  const [usuarios, medicos, hospitales] = await Promise.all([
    Usuario.find({ nombre: regex }),
    Medico.find({ nombre: regex }),
    Hospital.find({ nombre: regex })
  ]);

  resp.json({
    ok: true,
    usuarios,
    medicos,
    hospitales
  })
}

module.exports = {
  getSearchGlobal
}
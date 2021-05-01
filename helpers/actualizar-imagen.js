const fs = require('fs');
const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const borrarImagen = (tipo, img) => {
  const path = `./uploads/${tipo}/${img}`;
  if (fs.existsSync(path)) {
    // Borrar imagen anterior
    fs.unlinkSync(path);
  }
}

const actualizarImagen = async (tipo, id, nombreArchivo) => {
  switch (tipo) {
    case 'usuarios':
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        console.log('No se encontró un médico con ese Id')
        return false;
      }

      borrarImagen(tipo, usuario.img);

      usuario.img = nombreArchivo;
      await usuario.save();
      return true;

    case 'medicos':
      const medico = await Medico.findById(id);
      if (!medico) {
        console.log('No se encontró un médico con ese Id')
        return false;
      }

      borrarImagen(tipo, medico.img);

      medico.img = nombreArchivo;
      await medico.save();
      return true;

    case 'hospitales':

      const hospital = await Hospital.findById(id);
      if (!hospital) {
        console.log('No se encontró un médico con ese Id')
        return false;
      }

      borrarImagen(tipo, hospital.img);

      hospital.img = nombreArchivo;
      await hospital.save();
      return true;

    default:
      break;
  }

}

module.exports = {
  actualizarImagen
}
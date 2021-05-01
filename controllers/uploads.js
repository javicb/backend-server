const path = require('path');
const fs = require('fs');

const { response } = require("express");
const { v4: uuidv4 } = require('uuid');
const { actualizarImagen } = require("../helpers/actualizar-imagen");

const fileUpload = (request, resp = response) => {

  const tipo = request.params.tipo;
  const id = request.params.id;

  // Validar tipo de recursos
  const tiposValidos = ['hospitales', 'medicos', 'usuarios'];
  if (!tiposValidos.includes(tipo)) {
    return resp.status(400).json({
      ok: false,
      msg: 'El tipo seleccionado no es correcto'
    })
  }

  // Validar que existe un archivo
  if (!request.files || Object.keys(request.files).length === 0) {
    return resp.status(400).json({
      ok: false,
      msg: 'No se ha enviado ningún archivo'
    })
  }

  // Procesar imagen
  const file = request.files.imagen;
  const nombreCortado = file.name.split('.');
  const extensionArchivo = nombreCortado[nombreCortado.length - 1];

  // Validar extension
  const extensionValida = ['png', 'jpg', 'jpeg', 'gif'];
  if (!extensionValida.includes(extensionArchivo)) {
    return resp.status(400).json({
      ok: false,
      msg: 'No es una extensión permitida'
    })
  }

  // Generar nombre de archivo
  const nombreArchivo = `${uuidv4()}.${extensionArchivo}`;

  // Path para guardar la imagen
  const uploadPath = `./uploads/${tipo}/${nombreArchivo}`;

  // Mover la imagen
  file.mv(uploadPath, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    // Actualizar bbdd
    actualizarImagen(tipo, id, nombreArchivo);

    resp.json({
      ok: true,
      msg: 'Arhivo subido',
      nombreArchivo
    })
  });

}

const mostrarImagen = (request, resp = response) => {
  const tipo = request.params.tipo;
  const img = request.params.img;

  let pathImg = path.join(__dirname, `../uploads/${tipo}/${img}`);

  // imagen por defecto
  if (fs.existsSync(pathImg)) {
    resp.sendFile(pathImg);
  } else {
    pathImg = path.join(__dirname, '../uploads/no-img.jpg');
    resp.sendFile(pathImg);
  }
}

module.exports = {
  fileUpload,
  mostrarImagen
}
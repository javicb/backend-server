const { Router } = require('express');
const { check } = require('express-validator');
const { getHospitales, crearHospital, updateHospital, deleteHospital } = require('../controllers/hospitales');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Obtener hospitales
router.get('/', getHospitales);

// Crear nuevo hospital
router.post('/', [
  validarJWT,
  check('nombre', 'El nombre del hospital es obligatorio').not().isEmpty(),
  validarCampos
], crearHospital);

// Actualizar hospital
router.put('/:id', updateHospital);

// Borrar hospital
router.delete('/:id', deleteHospital);

module.exports = router;
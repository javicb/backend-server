const { Router } = require('express');
const { check } = require('express-validator');
const { getHospitales, crearHospital, updateHospital, deleteHospital } = require('../controllers/hospitales');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Obtener hospitales
router.get('/', getHospitales);

// Crear nuevo hospital
router.post('/', crearHospital);

// Actualizar hospital
router.put('/:id', updateHospital);

// Borrar hospital
router.delete('/:id', deleteHospital);

module.exports = router;
const { Router } = require('express');
const { check } = require('express-validator');
const { getMedicos, crearMedico, updateMedico, deleteMedico } = require('../controllers/medicos');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Obtener hospitales
router.get('/', getMedicos);

// Crear nuevo hospital
router.post('/', crearMedico);

// Actualizar hospital
router.put('/:id', updateMedico);

// Borrar hospital
router.delete('/:id', deleteMedico);

module.exports = router;
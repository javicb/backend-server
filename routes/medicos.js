const { Router } = require('express');
const { check } = require('express-validator');
const { getMedicos, crearMedico, updateMedico, deleteMedico } = require('../controllers/medicos');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Obtener hospitales
router.get('/', getMedicos);

// Crear nuevo hospital
router.post('/', [
  validarJWT,
  check('nombre', 'El nombre del médico es obligatorio').not().isEmpty(),
  check('hospital', 'El hospital debe ser un ID válido').isMongoId(),
  validarCampos
], crearMedico);

// Actualizar hospital
router.put('/:id', updateMedico);

// Borrar hospital
router.delete('/:id', deleteMedico);

module.exports = router;
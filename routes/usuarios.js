const { Router } = require('express');
const { getUsuarios, crearUsuario, updateUsuario } = require('../controllers/usuarios')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Obtener usuarios
router.get('/', getUsuarios);

// Crear nuevo usuario
router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio o formato incorrecto').isEmail(),
  validarCampos
], crearUsuario);

// Actualizar usuario
router.put('/:id', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio o formato incorrecto').isEmail(),
  check('role', 'El role es obligatorio').not().isEmpty(),
  validarCampos
], updateUsuario);

module.exports = router;
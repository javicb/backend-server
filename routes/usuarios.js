const { Router } = require('express');
const { getUsuarios, crearUsuario, updateUsuario, delteUsuario } = require('../controllers/usuarios')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Obtener usuarios
router.get('/', validarJWT, getUsuarios);

// Crear nuevo usuario
router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio o formato incorrecto').isEmail(),
  validarCampos
], crearUsuario);

// Actualizar usuario
router.put('/:id', [
  validarJWT,
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio o formato incorrecto').isEmail(),
  check('role', 'El role es obligatorio').not().isEmpty(),
  validarCampos
], updateUsuario);

// Borrar usuario
router.delete('/:id', validarJWT, delteUsuario);

module.exports = router;
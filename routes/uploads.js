const { Router } = require('express');
const expressFileUpload = require('express-fileupload');
const { fileUpload, mostrarImagen } = require('../controllers/uploads');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Middelware
router.use(expressFileUpload());

router.put('/:tipo/:id', validarJWT, fileUpload);
router.get('/:tipo/:img', validarJWT, mostrarImagen);

module.exports = router;
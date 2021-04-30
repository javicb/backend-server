const { Router } = require('express');
const { getSearchGlobal } = require('../controllers/busquedas');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:busqueda', validarJWT, getSearchGlobal);

module.exports = router;
const { Router } = require('express');
const { getSearchGlobal, getCollection } = require('../controllers/busquedas');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:busqueda', validarJWT, getSearchGlobal);
router.get('/coleccion/:tabla/:busqueda', validarJWT, getCollection);

module.exports = router;
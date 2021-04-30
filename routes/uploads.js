const { Router } = require('express');
const expressFileUpload = require('express-fileupload');
const { fileUpload } = require('../controllers/uploads');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Middelware
router.use(expressFileUpload());

router.put('/:tipo/:id', validarJWT, fileUpload)

module.exports = router;
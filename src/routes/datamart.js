const { Router} = require('express');
const router = Router();

const  {obtenerVolumenPorTipoDeResiduo } = require('../controllers/dataMartController');
router.get('/prueba', obtenerVolumenPorTipoDeResiduo);

module.exports = router;
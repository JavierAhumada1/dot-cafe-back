var express = require('express');
var router = express.Router();

const {create, read, readByCamp, readByName} = require('../controllers/CoffeebykiloController')

router.get('/', read)
router.get('/all', readByCamp)
router.get('/name', readByName)
router.post('/', create)

module.exports = router;
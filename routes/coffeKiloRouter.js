var express = require('express');
var router = express.Router();

const {create} = require('../controllers/CoffebykiloController')

router.post('/', create)

module.exports = router;
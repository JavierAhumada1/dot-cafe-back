var express = require('express');
var router = express.Router();
const {create, read, readByCamp} = require('../controllers/CoffeeMachineControlers')

router.get('/', read)
router.get('/all', readByCamp)
router.post('/', create)

module.exports = router;
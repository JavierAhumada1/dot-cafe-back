var express = require('express');
var router = express.Router();
const {create, read, readByCamp, readOne} = require('../controllers/CoffeeMachineControlers')

router.get('/', read)
router.get('/all', readByCamp)
router.post('/', create)
router.get('/:id', readOne)

module.exports = router;
var express = require('express');
var router = express.Router();
const { create, readAll } = require('../controllers/coffeeForDrinkControllers')

router.post('/fordrink', create)
router.get('/', readAll)

module.exports = router;
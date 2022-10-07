var express = require('express');
var router = express.Router();
const {create, read, readByCamp} = require('../controllers/FiltersControllers')

router.get('/', read)
router.get('/all', readByCamp)
router.post('/', create)

module.exports = router;
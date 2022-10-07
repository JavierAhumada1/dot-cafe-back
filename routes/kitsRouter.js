var express = require('express');
var router = express.Router();
const {create, read, readByCamp} = require('../controllers/KitsControllers')

router.get('/', read)
router.get('/all', readByCamp)
router.post('/', create)

module.exports = router;
var express = require('express');
var router = express.Router();
const {create, read} = require('../controllers/FiltersControllers')

router.get('/', read)
router.post('/', create)

module.exports = router;
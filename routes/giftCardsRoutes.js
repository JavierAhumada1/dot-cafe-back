var express = require('express');
var router = express.Router();
const { create,readAll } = require('../controllers/giftCardControllers')

router.post('/create', create)
router.get('/', readAll)

module.exports = router;
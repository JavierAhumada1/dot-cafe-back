var express = require('express');
var router = express.Router();
const { create, readAll, readOrder } = require('../controllers/ShopOrderControllers')

router.post('/', create)
router.get('/', readAll)
router.get('/:id', readOrder)

module.exports = router;
var express = require('express');
var router = express.Router();
const { create, readAll, readOrder, deleteOrder } = require('../controllers/ShopOrderControllers')

router.post('/', create)
router.get('/', readAll)
router.get('/:id', readOrder)
router.delete('/delete-order/:id', deleteOrder)

module.exports = router;
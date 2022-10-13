var express = require('express');
var router = express.Router();
const { create, readAll, readOrder, deleteOrder, updateOrder, resumeOrder } = require('../controllers/ShopOrderControllers')

router.post('/', create)
router.patch('/update-order/:id', updateOrder)
router.get('/', readAll)
router.get('/:id', readOrder)
router.post('/mailto/:id', resumeOrder)
router.delete('/delete-order/:id', deleteOrder)


module.exports = router;
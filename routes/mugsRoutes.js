var express = require('express');
var router = express.Router();
const { create, updateAfterBuy, readAll, readByCamp, readOne } = require('../controllers/coffeeMugsControllers')

router.get('/all', readByCamp)
router.post('/create', create)
router.patch('/:id', updateAfterBuy)
router.get('/', readAll)
router.get('/:id', readOne)

module.exports = router;
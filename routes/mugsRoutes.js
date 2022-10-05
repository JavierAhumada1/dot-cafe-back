var express = require('express');
var router = express.Router();
const { create, updateAfterBuy, readAll } = require('../controllers/coffeeMugsControllers')

router.post('/create', create)
router.patch('/:id', updateAfterBuy)
router.get('/', readAll)

module.exports = router;
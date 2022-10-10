var express = require('express');
var router = express.Router();
const { SubscriberCreate, SubscribersRead } = require('../controllers/NewsLetter');

router.post('/', SubscriberCreate)
router.get('/', SubscribersRead)

module.exports = router;
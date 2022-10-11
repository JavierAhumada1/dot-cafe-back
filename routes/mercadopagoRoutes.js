var express = require('express');
var router = express.Router();
const { create_preference } = require('../controllers/mercadoPagoControllers')


router.post('/preference', create_preference)

router.get('/feedback', function(req, res) {

	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	})

})


module.exports = router;
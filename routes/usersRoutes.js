var express = require('express');
var router = express.Router();
const { signUp, userVerify, signIn, signOut, editProfile } = require('../controllers/userControllers')

router.post('/signup', signUp)
router.get('/verify/:code', userVerify)
router.post('/signin',signIn)
router.post('/signout', signOut)
router.patch('/update/:id', editProfile)

module.exports = router;
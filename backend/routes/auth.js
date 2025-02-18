const {signup, login, forget} = require('../controller/authcontroller');

const router = require('express').Router();

router.post('/login',login);
router.post('/signup',signup);
router.post('/forget',forget);


module.exports = router;
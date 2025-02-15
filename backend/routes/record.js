const router = require('express').Router();

require.post('/login',login);
require.post('/signup',signup);
require.post('/forogt',forget);
require.post('/reset',forget);

module.exports = router;
const express = require('express');
const { signup, login} = require('../controller/auth');
const { requireLogin } = require('../common-middleware/index');
const { validateSignupRequest, isRequestValidated, validateLoginRequest } = require('../validators/auth');
const router = express.Router();

router.post('/login', validateLoginRequest, isRequestValidated, login);

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

// router.post('/profile', requireLogin, (req, res) => {
//     res.status(200).json({ user: 'profile'})
// });

module.exports = router;
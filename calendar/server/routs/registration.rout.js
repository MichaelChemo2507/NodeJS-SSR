const express = require('express');
const LoginController = require('../controllers/login.controller')

const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/', tryCatch(LoginController.getLoginPage));
router.post('/', tryCatch(LoginController.authorizationProcess));


module.exports = router;

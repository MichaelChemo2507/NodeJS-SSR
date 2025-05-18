const express = require('express');
const LoginController = require('../controllers/login.controller')
const errorHandler = require('../middleware/errorsHandler.middleware');

const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/', tryCatch(LoginController.getLoginPage));

router.use(errorHandler);

module.exports = router;

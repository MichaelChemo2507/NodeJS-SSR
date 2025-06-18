const express = require('express');
const RegistrationController = require('../controllers/registration.controller')

const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/', tryCatch(RegistrationController.getRegistrationPage));
router.post('/', tryCatch(RegistrationController.registrationProcess));


module.exports = router;

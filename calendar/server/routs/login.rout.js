const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');

const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();



router.use(errorHandler);

module.exports = router;

const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const router = express.Router();

router.use('/activities', require('./activities.rout'));
router.use('/courses', require('./courses.rout'));
router.use('/users', require('./users.rout'));
router.use('/login', require('./login.rout'));

router.use(errorHandler);

module.exports = router;

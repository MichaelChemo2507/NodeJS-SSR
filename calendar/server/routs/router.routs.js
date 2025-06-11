const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const router = express.Router();

router.use('/courses', require('./routs/courses.rout'));
router.use('/users', require('./routs/users.rout'));
router.use('/login', require('./routs/login.rout'));

router.use(errorHandler);

module.exports = router;

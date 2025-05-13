const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const UsersController = require('../controllers/users.controller');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/', tryCatch(UsersController.getAll));
router.get('/:id', tryCatch(UsersController.findUserById));
router.post('/', tryCatch(UsersController.addUser));
router.delete('/:id', tryCatch(UsersController.deleteUser));
router.post('/:id', tryCatch(UsersController.updateUser));

router.use(errorHandler);

module.exports = router;

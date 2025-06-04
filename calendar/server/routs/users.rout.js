const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const UsersController = require('../controllers/users.controller');
const authinticationProcess = require('../middleware/authintication.middleqare');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/listPage',authinticationProcess, UsersController.getUsersListPage);

router.get('/', tryCatch(UsersController.getAll));
router.get('/:id', tryCatch(UsersController.findUserById));
router.get('/', tryCatch(UsersController.deleteUser));
router.post('/', tryCatch(UsersController.addUser));
router.post('/:id', tryCatch(UsersController.updateUser));

router.use(errorHandler);

module.exports = router;

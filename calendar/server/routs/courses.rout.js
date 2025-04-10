const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const CoursController = require('../controllers/courses.controller');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/addPage', CoursController.getAddCoursesPage);
router.get('listPage', CoursController.getCoursesListPage);

router.get('/', tryCatch(CoursController.getAll));
router.get('/:id', CoursController.findCoursById);
router.post('/', CoursController.addCours);
router.delete('/:id', CoursController.deleteCours);
router.put('/:id', CoursController.updateCours);

router.use(errorHandler);

module.exports = router;

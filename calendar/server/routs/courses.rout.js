const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const CoursController = require('../controllers/courses.controller');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/addPage', tryCatch(CoursController.getAddCoursesPage));
router.get('/listPage', CoursController.getCoursesListPage);

router.get('/', tryCatch(CoursController.getAll));
router.get('/:id', tryCatch(CoursController.findCourseById));
router.post('/', tryCatch(CoursController.addCourse));
router.delete('/:id', tryCatch(CoursController.deleteCourse));
router.put('/:id', tryCatch(CoursController.updateCourse));

router.use(errorHandler);

module.exports = router;

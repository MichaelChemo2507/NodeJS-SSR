const express = require('express');
const errorHandler = require('../middleware/errorsHandler.middleware');
const CoursesController = require('../controllers/courses.controller');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/addPage', tryCatch(CoursesController.getAddCoursesPage));
router.get('/updatePage/:id', tryCatch(CoursesController.getUpdateCoursesPage));
router.get('/listPage', CoursesController.getCoursesListPage);

router.get('/', tryCatch(CoursesController.getAll));
router.get('/:id', tryCatch(CoursesController.findCourseById));
router.post('/', tryCatch(CoursesController.addCourse));
router.delete('/:id', tryCatch(CoursesController.deleteCourse));
router.post('/:id', tryCatch(CoursesController.updateCourse));

router.use(errorHandler);

module.exports = router;

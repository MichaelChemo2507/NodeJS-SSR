const express = require('express');
const CoursesController = require('../controllers/courses.controller');
const authinticationProcess = require('../middleware/authintication.middleqare');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/addPage',authinticationProcess, tryCatch(CoursesController.getAddCoursesPage));
router.get('/updatePage/:id',authinticationProcess, tryCatch(CoursesController.getUpdateCoursesPage));
router.get('/listPage',authinticationProcess, CoursesController.getCoursesListPage);

router.get('/',tryCatch(CoursesController.getAll));
router.get('/:id',tryCatch(CoursesController.findCourseById));
router.post('/',tryCatch(CoursesController.addCourse));
router.delete('/:id',tryCatch(CoursesController.deleteCourse));
router.post('/:id',tryCatch(CoursesController.updateCourse));


module.exports = router;

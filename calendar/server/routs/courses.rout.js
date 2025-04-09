const express = require('express');
const CoursController = require('../controllers/courses.controller');

const router = express.Router();

router.get('/addPage', CoursController.getAddCoursesPage);
router.get('listPage',);

router.get('/',CoursController.getAll);
router.get('/:id',CoursController.findCoursById);
router.post('/', CoursController.addCours);
router.delete('/:id', CoursController.deleteCours);
router.put('/:id',CoursController.updateCours);

module.exports = router;
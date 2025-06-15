const express = require('express');
const ActivitiesController = require('../controllers/activities.controller');
const authinticationProcess = require('../middleware/authintication.middleqare');
const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/addPage',authinticationProcess, tryCatch(ActivitiesController.getAddActivityPage));

router.get('/',tryCatch(ActivitiesController.getAll));
router.post('/',authinticationProcess,tryCatch(ActivitiesController.addActivity));
router.delete('/:id',tryCatch(ActivitiesController.deleteActivity));
router.post('/:id',tryCatch(ActivitiesController.updateActivty));


module.exports = router;

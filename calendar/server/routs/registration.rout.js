const express = require('express');
const RagistrationController = require('../controllers/ragistration.controller')

const { tryCatch } = require('../utils/tryCatch.utils');

const router = express.Router();

router.get('/', tryCatch(RagistrationController.getRagistrationPage));
router.post('/', tryCatch(RagistrationController.ragistrationProcess));


module.exports = router;

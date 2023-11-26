const express = require('express');

const router = express.Router();

const errorController = require('../controllers/errorHandler');

router.use(errorController.error404);

module.exports = router;
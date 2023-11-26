const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.getHome);

router.get('/users', controller.getUsers);

router.post('/add-user', controller.addUser);

module.exports = router;
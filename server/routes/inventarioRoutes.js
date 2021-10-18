const express = require('express');
const inventarioController = require('../controllers/inventarioController');

const router = express.Router();

router.get('/', inventarioController.getTest);

module.exports = router;
const express = require('express');
const verifyToken = require('../controllers/verifyToken')
const inventarioController = require('../controllers/inventarioController');

const router = express.Router();

router.get('/', verifyToken, inventarioController.getInventario);

module.exports = router;
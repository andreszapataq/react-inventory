const express = require('express')
const usuarioController = require('../controllers/authController')

const router = express.Router()

router.post('/', usuarioController.getLogged)

module.exports = router
const express = require('express')
const bodegaController = require('../controllers/bodegaController')

const router = express.Router()

router
    .route('/')
    .post(bodegaController.addBodega)
    .get(bodegaController.getAsesores)

module.exports = router

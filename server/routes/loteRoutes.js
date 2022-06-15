const express = require('express')
const loteController = require('../controllers/loteController')

const router = express.Router()

router
    .route('/')
    .get(loteController.getLote)
    .post(loteController.addLote)

module.exports = router
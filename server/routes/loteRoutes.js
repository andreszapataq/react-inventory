const express = require('express')
const loteController = require('../controllers/loteController')

const router = express.Router()

router
    .route('/')
    .post(loteController.addLote)

module.exports = router
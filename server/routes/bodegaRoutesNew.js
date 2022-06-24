const express = require('express')
const bodegaControllerNew = require('../controllers/bodegaControllerNew')

const router = express.Router()

router
    .route('/')
    .get(bodegaControllerNew.getBodega)

module.exports = router
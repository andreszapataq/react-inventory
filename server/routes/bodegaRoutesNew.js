const express = require('express')
// const verifyToken = require('../controllers/verifyToken')
const bodegaControllerNew = require('../controllers/bodegaControllerNew')

const router = express.Router()

router
    .route('/')
    .get(bodegaControllerNew.getBodega)

module.exports = router
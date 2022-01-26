const jwt = require('jsonwebtoken')

function verifyAuth (req, res, next) {
    const token = req.header('auth-token')   
}
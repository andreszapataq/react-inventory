const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuarioModel')

exports.getLogged = async (req, res, next) => {
    const user = await Usuario.findOne({email: req.body.email })
    if(!user) {
        return res.status(400).json({
        status: "Loqui!",
        message: "Usuario no encontrado"
        })
    }

    if(req.body.password === user.password) {
        const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)

        res.header('authToken', token).send(token)
    }
    
    return res.status(400).json({
        status: "Loca!",
        message: "Password incorrecto",
        isLogged: false
    })
}
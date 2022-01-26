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

        return res.status(200).json({
            status: "Epa!",
            message: "Ok McKain",
            isLogged: true,
            token
        })
    }
    
    return res.status(400).json({
        status: "Loca!",
        message: "Password incorrecto",
        isLogged: false
    })
}
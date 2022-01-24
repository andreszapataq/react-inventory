const Usuario = require('../models/usuarioModel')

exports.getLogged = async (req, res, next) => {
    const user = await Usuario.findOne({email: req.body.email })
    if(!user) return res.status(400).send('Email no encontrado')

    const validPass = await (req.body.password === user.password)
    if(!validPass) return res.status(400).send('Password incorrecto')

    res.send('Inicio de sesión correcto')
}
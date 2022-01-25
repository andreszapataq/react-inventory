const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuarioModel')

exports.getLogged = async (req, res, next) => {
    const user = await Usuario.findOne({email: req.body.email })
    if(!user) return res.status(400).send('Email no encontrado')

    console.log(user)

    const validPass = await (req.body.password === user.password)
    if(!validPass) return res.status(400).send('Password incorrecto')

    const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)
    res.header('auth-token', token).send(token)

    /* res.status(200).json({
        status: "Epa!",
        message: "Ok McKain",
        data: "logged"
    }) */
}
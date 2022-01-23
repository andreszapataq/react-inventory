const Usuario = require('../models/usuarioModel')

exports.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find()

    res.status(200).json({
        status: 'Epa!',
        message: 'Ok McKain',
        data: usuarios
    })
}
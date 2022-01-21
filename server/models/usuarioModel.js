const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    email: String,
    password: String
})

const Usuario = mongoose.model('Usuarios', usuarioSchema)

module.exports = Usuario
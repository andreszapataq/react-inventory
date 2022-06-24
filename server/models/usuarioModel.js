const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombres: String,
    apellidos: String,
    email: String,
    password: String
})

const Usuario = mongoose.model('Usuarios', usuarioSchema)

module.exports = Usuario
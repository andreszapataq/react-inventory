const mongoose = require('mongoose')
const Schema = mongoose.Schema

const referenciaSchema = new Schema({
    codigo: String,
    nombre: String
})

const Referencia = mongoose.model('Referencias', referenciaSchema)

module.exports = Referencia
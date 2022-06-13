const mongoose = require("mongoose")

const loteSchema = new mongoose.Schema({
    bodega_actual: String,
    notas: String
})

const Lote = mongoose.model('Lotes', loteSchema)

module.exports = Lote
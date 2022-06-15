const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const loteSchema = new mongoose.Schema({
    referencia: ObjectId,
    lote: String,
    fecha_vencimiento: String,
    bodega_actual: ObjectId,
    notas: String
})

const Lote = mongoose.model('Lotes', loteSchema)

module.exports = Lote
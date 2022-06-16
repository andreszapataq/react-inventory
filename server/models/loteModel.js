const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loteSchema = new Schema({
    referencia: { type: Schema.Types.ObjectId, ref: "Referencias" },
    lote: String,
    fecha_vencimiento: String,
    bodega_actual: { type: Schema.Types.ObjectId, ref: "Bodegas" },
    notas: String
})

const Lote = mongoose.model('Lotes', loteSchema)

module.exports = Lote
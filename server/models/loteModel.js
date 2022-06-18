const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loteSchema = new Schema({
    referencia: { type: Schema.Types.ObjectId, ref: "Referencia" },
    lote: String,
    fecha_vencimiento: String,
    bodega_actual: { type: Schema.Types.ObjectId, ref: "Bodega" },
    notas: String
})

const Lote = mongoose.model('Lotes', loteSchema)

module.exports = Lote
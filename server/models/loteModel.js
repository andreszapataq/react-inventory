const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Referencia = require("../models/referenciaModel")

const loteSchema = new Schema({
    material: { type: Schema.Types.ObjectId, ref: Referencia },
    lote: String,
    fecha_vencimiento: String,
    bodega_actual: { type: Schema.Types.ObjectId, ref: "Bodega" },
    notas: String
})

/* loteSchema.pre("save", function(next) {
    this.populate({path: "referencias", select: "nombre"})
    this.populate({path: "bodega_actual", select: "nombre"})
    next()
}) */

const Lote = mongoose.model('Lotes', loteSchema)

module.exports = Lote
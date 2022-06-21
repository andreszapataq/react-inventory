const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bodegaSchema = new Schema({
    nombre: String,
    asesor_id: { type: Schema.Types.ObjectId, ref: "Usuarios" },
    stock: [Object]
})

const Bodega = mongoose.model('Bodegas', bodegaSchema)

module.exports = Bodega
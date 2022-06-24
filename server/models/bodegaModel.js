require("../models/usuarioModel")
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bodegaSchema = new Schema({
    nombre: String,
    asesor_id: { type: Schema.Types.ObjectId, ref: "Usuarios" },
    stock: [Object]
})

bodegaSchema.pre([/^find/, "save"], function(next) {
    this
    .populate({path: "asesor_id"})
    next()
})

const Bodega = mongoose.model('Bodegas', bodegaSchema)

module.exports = Bodega
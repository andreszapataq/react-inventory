require("../models/usuarioModel")
require("../models/loteModel")
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bodegaSchema = new Schema({
    nombre: String,
    asesor: { type: Schema.Types.ObjectId, ref: "Usuarios" },
    stock: [{ type: Schema.Types.ObjectId, ref: "Lotes" }]
    // stock: [Object]
})

bodegaSchema.pre([/^find/, "save"], function(next) {
    this
    .populate({path: "asesor", select: "-__v -email -password"})
    .populate({ path: "stock", select: "-__v" })
    next()
})

const Bodega = mongoose.model('Almacenes', bodegaSchema)

module.exports = Bodega
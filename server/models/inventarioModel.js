const mongoose = require('mongoose');
const Schema = mongoose.Schema

const inventarioSchema = new Schema({
    nombre: String,
    asesor_id: { type: Schema.Types.ObjectId },
    stock: [Object]
});

const Inventario = mongoose.model('Bodegas', inventarioSchema);

module.exports = Inventario;
const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    nombre: String,
    stock: [Object],
    /* stock: {
        type: Array,
        default: undefined
    } */
    asesor_id: Number
});

const Inventario = mongoose.model('Bodegas', inventarioSchema);

module.exports = Inventario;
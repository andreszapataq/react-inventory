const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    nombre: String,
    asesor_id: ObjectId,
    stock: [Array]
});

const Inventario = mongoose.model('Bodegas', inventarioSchema);

module.exports = Inventario;
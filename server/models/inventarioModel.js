const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    nombre: String,
    stock: [Array],
    asesor_id: ObjectId
});

const Inventario = mongoose.model('Bodegas', inventarioSchema);

module.exports = Inventario;
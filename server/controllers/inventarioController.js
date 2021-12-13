const { ObjectId } = require('bson');
const Inventario = require('../models/inventarioModel');

exports.getTest = async (req, res, next) => {
  const inventario = await Inventario.aggregate([
    {
      '$match': {
        'asesor_id': ObjectId('61b3c99a8880fceda4d0353a')
      }
    }, {
      '$lookup': {
        'from': 'usuarios', 
        'localField': 'asesor_id', 
        'foreignField': '_id', 
        'as': 'asesor'
      }
    }, {
      '$unwind': {
        'path': '$asesor'
      }
    }, {
      '$lookup': {
        'from': 'referencias', 
        'localField': 'stock.producto', 
        'foreignField': '_id', 
        'as': 'producto'
      }
    }, {
      '$unwind': {
        'path': '$producto'
      }
    }, {
      '$group': {
        '_id': '$_id', 
        'nombre': {
          '$first': '$nombre'
        }, 
        'stock': {
          '$first': '$stock'
        }, 
        'asesor': {
          '$first': '$asesor.nombres'
        }
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }
  ]);
    
  console.log(inventario);

  res.status(200).json({
    status: "Success",
    message: "Ok Ok",
    data: inventario
  })
}

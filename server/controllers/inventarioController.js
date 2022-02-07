const { ObjectId } = require('bson');
const Inventario = require('../models/inventarioModel');

exports.getInventario = async (req, res, next) => {
  const userId = req.user._id

  const inventario = await Inventario.aggregate([
    {
      '$match': {
        'asesor_id': ObjectId(`${userId}`)
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
      '$unwind': {
        'path': '$stock'
      }
    }, {
      '$lookup': {
        'from': 'referencias', 
        'let': {
          'productoId': {
            '$toObjectId': '$stock.producto'
          }, 
          'producto': '$stock'
        }, 
        'pipeline': [
          {
            '$match': {
              '$expr': {
                '$eq': [
                  '$_id', '$$productoId'
                ]
              }
            }
          }, {
            '$replaceRoot': {
              'newRoot': {
                '$mergeObjects': [
                  '$$producto', '$$ROOT'
                ]
              }
            }
          }
        ], 
        'as': 'productos'
      }
    }, {
      '$group': {
        '_id': '$_id', 
        'nombre': {
          '$first': '$nombre'
        }, 
        'stock': {
          '$push': {
            '$first': '$productos'
          }
        }, 
        'asesor': {
          '$first': '$asesor'
        }
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }
  ]);

  res.status(200).json({
    status: "Success",
    message: "Ok Ok",
    data: inventario
  })
}

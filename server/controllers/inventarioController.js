const { ObjectId } = require('bson');
const Inventario = require('../models/inventarioModel');

exports.getTest = async (req, res, next) => {
  const inventario = await Inventario.aggregate([
    {
      '$unwind': {
        'path': '$stock'
      }
    }, {
      '$match': {
        'stock.producto': new ObjectId('6197ddb59c04cd91ee0f057c')
      }
    }, {
      '$group': {
        '_id': '$stock.producto', 
        'caca': {
          '$push': '$stock'
        }
      }
    }, {
      '$project': {
        'suma': {
          '$size': '$caca'
        }
      }
    },
    {
      '$lookup': {
        'from': 'usuarios', 
        'localField': 'asesor_id', 
        'foreignField': '_id', 
        'as': 'nombre_asesor'
      }
    }
      
      /* {
        '$match': {
          'asesor_id': ObjectId('612489d0d8c6c1e3d2f6302d')
        }
      }, {
        '$unwind': {
          'path': '$stock'
        }
      }, {
        '$match': {
          'stock.cantidad': {
            '$gt': 0
          }
        }
      }, {
        '$lookup': {
          'from': 'usuarios', 
          'localField': 'asesor_id', 
          'foreignField': '_id', 
          'as': 'nombre_asesor'
        }
      }, {
        '$unwind': {
          'path': '$nombre_asesor'
        }
      }, {
        '$group': {
          '_id': '$_id', 
          'nombre': {
            '$first': '$nombre'
          }, 
          'stock': {
            '$push': '$stock'
          }, 
          'nombre_asesor': {
            '$first': '$nombre_asesor.nombres'
          }
        }
      }, {
        '$sort': {
          '_id': 1
        }
      } */
  ]);
    
  console.log(inventario);

  res.status(200).json({
    status: "Success",
    message: "Ok Ok",
    data: inventario
  })
}

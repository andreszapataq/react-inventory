const Inventario = require('../models/inventarioModel');

exports.getTest = async (req, res, next) => {
    const inventario = await Inventario.aggregate([
        {"$match": {"asesor_id": 1}},
        {"$unwind": "$stock"},
        {"$match": {"stock.cantidad": {"$gt": 0}}},
        {"$group": {
            "_id": "$_id",
            "nombre": {"$first": "$nombre"},
            "stock": {"$push": "$stock"}}}
    ]);

    /* {"asesor_id": 1}, {"stock": {"$elemMatch": {"cantidad": {"$ne": 0}}}} */
    
    console.log(inventario);

    res.status(200).json({
        status: "Success",
        message: "Ok Ok",
        data: inventario
    })
}
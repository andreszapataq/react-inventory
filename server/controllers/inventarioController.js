const { ObjectId } = require('bson');
const Inventario = require('../models/inventarioModel');

exports.getTest = async (req, res, next) => {
    const inventario = await Inventario.aggregate([
        {"$match": {"asesor_id": ObjectId("612489d0d8c6c1e3d2f6302d")}},
        {"$unwind": "$stock"},
        {"$match": {"stock.cantidad": {"$gt": 0}}},
        {"$group": {
            "_id": "$_id",
            "nombre": {"$first": "$nombre"},
            "stock": {"$push": "$stock"},
            "asesor_id": {"$first": "$asesor_id"}}}
    ]).sort({"_id": 1});

    /* {"asesor_id": 1}, {"stock": {"$elemMatch": {"cantidad": {"$ne": 0}}}} */
    
    console.log(inventario);

    res.status(200).json({
        status: "Success",
        message: "Ok Ok",
        data: inventario
    })
}
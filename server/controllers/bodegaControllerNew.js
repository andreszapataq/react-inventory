const Bodega = require('../models/bodegaModel')

exports.getBodega = async (req, res) => {
    const bodega = await Bodega.find({})
    console.log(bodega)
    res.status(200).json({
        status: "Success",
        data: bodega
    })
}
const Bodega = require('../models/inventarioModel')

exports.addBodega = async (req, res) => {
    const bodega = await Bodega.create(req.body)
    res.status(200).json({
        status: "Success",
        data: bodega
    })
}
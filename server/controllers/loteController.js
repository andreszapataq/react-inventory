const Lote = require('../models/loteModel')

exports.addLote = async (req, res) => {
    const lote = await Lote.create(req.body)
    res.status(200).json({
        status: "Success",
        data: lote
    })
}
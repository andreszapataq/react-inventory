const Lote = require('../models/loteModel')

exports.getLote = async (req, res) => {
    const lote = await Lote.find({})
    .populate({path: "material", select: "nombre"})
    .exec()

    console.log(lote)
    // .populate({ path: 'bodega', select: 'nombre'  })
    res.status(200).json({
        status: "Success",
        data: lote
    })
}

exports.addLote = async (req, res) => {
    const lote = await Lote.create(req.body)
    res.status(200).json({
        status: "Success",
        data: lote
    })
}
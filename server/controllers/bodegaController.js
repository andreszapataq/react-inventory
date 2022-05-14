const Bodega = require('../models/inventarioModel')
const Asesores = require('../models/usuarioModel')

exports.addBodega = async (req, res) => {
    const bodega = await Bodega.create(req.body)
    res.status(200).json({
        status: "Success",
        data: bodega
    })
}

exports.getAsesores = async (req, res) => {
    const asesores = await Asesores.aggregate([
        {
            '$project': {
                'asesor': {
                    '$concat': [
                        '$nombres', ' ', '$apellidos'
                    ]
                }
            }
        }
    ])

    res.status(200).json({
        status: "Success",
        message: "Ok Ok",
        data: asesores
    })
}
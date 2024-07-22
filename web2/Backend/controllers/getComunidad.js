
const Comunidad = require('../model/comunidad')

const getComunidad = async (req, res) => {
    const { _id } = req.body;

    Comunidad.findOne({ _id }).then((comunidad) => {
        if (!comunidad) {
            return res.status(402).json({ mensaje: 'No se encontro la comunidad' })
        }

        const { nombre, descripcion, imagen, idadmin } = comunidad;

        res.status(201).json({
            mensaje: 'Se encontro la comunidad',
            usuario: {
                nombre, descripcion, imagen, idadmin, _id,
            }
        })

    });
}

module.exports = getComunidad
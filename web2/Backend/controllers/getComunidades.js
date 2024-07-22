
const Comunidad = require('../model/comunidad')

const getComunidades = async (req, res) => {
    const { nombre, descripcion, imagen, idadmin } = req.body;
    
    Comunidad.find({}).then((comunidad) => {
        if (!comunidad) {
            return res.status(402).json({ mensaje: 'No hay comunidades creadas' })
        }

        const allMembers = comunidad.map(member => member.toObject());
        res.status(201).json(allMembers);
        /*res.status(201).json({
            mensaje: 'Todas la comunidades',
            
            comunidad: {
                nombre, descripcion,
            },
            jsonDocuments,
        });*/
    });
}

module.exports = getComunidades
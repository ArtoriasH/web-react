const Rol = require('../model/rolesComunidad')

const salirComunidad = async(req, res) =>{
    const {_iduser, _idcomunidad} = req.body;

    Rol.findOne({_iduser, _idcomunidad}).then((rol) =>{
        if(!rol){
            const _id = rol
            const nuevoRol = new Rol({
                _id,
                _iduser,
                _idcomunidad,
                rolAsignado: true,
                
            });
            nuevoRol.save()
            .then((rol)=>{
                res.status(200).json({mensaje: 'Se unio a la comunidad', rol});
            })
            .catch(error => console.error(error));
        }
        else{
            res.status(400).json({mensaje: 'El usuario ya pertenece a la comunidad', rol});
        }

        
    });
}

module.exports = joinComunidad
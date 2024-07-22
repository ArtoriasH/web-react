const bcrypt = require('bcrypt');
const Usuario = require('../model/usuario')

const login = async(req, res) =>{
    const {correo, password} = req.body;

    Usuario.findOne({correo}).then((usuario) =>{
        if(!usuario){
            return res.status(402).json({mensaje: 'Usuario no encontrado'})
        }

        bcrypt.compare(password, usuario.password).then((esCorrecta) =>{
            if(esCorrecta) {
                const {_id, user} = usuario

                res.status(201).json({mensaje: 'Usuario logeado correctamente', 
                usuario:{
                    _id, user,
                },
            });
            } else{
                return res.status(405).json({mensaje: 'Contraseña incorrecta'});
            }
        });
    });
}

module.exports = login
const bcrypt = require('bcrypt')
const Usuario = require('../model/usuario')

const register = async(req, res) =>{
    const {user, correo, password} = req.body;

    Usuario.findOne({correo}).then((usuario) =>{
        if(usuario){
            return res.status(400).json({mensaje: 'Ya existe un usuario con ese correo'}); 
        }else if(!user || !correo || !password){
            return res.status(401).json({mensaje: 'Falta el user / correo / password'})
        }else{
            bcrypt.hash(password, 10, (error, passwordHasheada)=>{
                if(error) res.json({error})
                else{
                    const nuevoUsuario = new Usuario({
                        user,
                        correo,
                        password: passwordHasheada,
                    });
                    nuevoUsuario.save()
                    .then((usuario)=>{
                        res.status(200).json({mensaje: 'Usuario creado con exito', usuario});
                    })
                    .catch(error => console.error(error));
                }
            });
        }
    })

}

module.exports = register
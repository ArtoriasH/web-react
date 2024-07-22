const Categoria = require('../model/categoria')

const crearCategoria = async(req, res) =>{
    const {nombreCategory} = req.body;

    if(!nombreCategory){
        return res.status(406).json({mensaje: 'No puedes crear una categoria sin un nombre'})
    }else{
        const nuevaCategoria = new Categoria({
            nombreCategory,
        });
        nuevaCategoria.save()
        .then((usuario)=>{
            res.status(203).json({mensaje: 'Has generado una nueva categoria', usuario});
        })
        .catch(error => console.error(error));
    }


    /*Comunidad.findOne({correo}).then((usuario) =>{
        if(usuario){
            return res.status(400).json({mensaje: 'Ya existe un usuario con ese correo'}); 
        }else if(!user || !correo || !password){
            return res.status(401).json({mensaje: 'Falta el user / correo / password'})
        }else{
            bcrypt.hash(password, 10, (error, passwordHasheada)=>{
                if(error) res.json({error})
                else{
                    const nuevoUsuario = new Comunidad({
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
    })*/

}

module.exports = crearCategoria
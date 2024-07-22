const Post = require('../model/post')

const crearPost = async(req, res) =>{
    const {contenidoPost} = req.body;

    if(!contenidoPost){
        return res.status(406).json({mensaje: 'No puedes crear un post sin contenido'})
    }else{
        const nuevoPost = new Post({
            contenidoPost,
            //fechaPost,
        });
        nuevoPost.save()
        .then((usuario)=>{
            res.status(203).json({mensaje: 'Tu post se ha generado', usuario});
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

module.exports = crearPost
const Usuario = require('../model/usuario');

const getUserById = async(req, res) =>{
    const {userId} = req.params

    if(userId.length === 24){
        Usuario.findById(userId).then((usuario) =>{
            if(!usuario){
                return res.json({mensaje: 'No se encontro ningun usuario con esa ID'});
            } else{
                const {id, password, __v, ...resto} = usuario._doc
                res.json(resto);
            }
        });
    } else {
        res.json({mensaje: 'Estas enviando una ID incorrecta'})
    }
}

module.exports = getUserById
const register = require('./register')
const login = require('./login')
const getUserById = require('./getUserById')
const crearComunidad = require('./crearComunidad')
const getComunidades = require('./getComunidades')
const getComunidad = require('./getComunidad')
const joinComunidad = require('./joinComunidad')
const crearComentario = require('./crearComentario')
const crearPost = require('./crearPost')
const crearCategoria = require('./crearCategoria')


module.exports = {
    register,
    login,
    getUserById,
    crearComunidad,
    getComunidades,
    getComunidad,
    joinComunidad,
    crearComentario,
    crearPost,
    crearCategoria,
};

//se usa npm i express mongoose cors bcrypt en esta carpeta del proyecto
//luego npm i nodemon -D
//se hacen pruebas de backend con npm run dev
const express = require("express");
const cors = require ("cors");
const db = require("./database/db");

const controllers = require('./controllers') 

const app = express()

app.use(cors())
app.use(express.json())

app.get('/user/:userId', controllers.getUserById)
app.post('/register', controllers.register)
app.post('/login', controllers.login)
app.post('/crearComunidad', controllers.crearComunidad)
app.get('/getComunidades', controllers.getComunidades)
app.post('/getComunidad', controllers.getComunidad)
app.post('/joinComunidad', controllers.joinComunidad)
app.post('/crearComentario', controllers.crearComentario)
app.post('/crearPost', controllers.crearPost)
app.post('/crearCategoria', controllers.crearCategoria)



const PORT = 4000;

app.listen(PORT, () => {
    console.log('Server funcionando en el puerto ${PORT}');
    db();
});

module.exports = app
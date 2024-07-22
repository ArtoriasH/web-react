const {model, Schema} = require("mongoose");

const comunidadSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: false, unique: false},
    idadmin: {type: String, required: false, unique: false},
})

module.exports = model('comunidades', comunidadSchema);
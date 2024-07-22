const {model, Schema} = require("mongoose");

const rolComunidadSchema = new Schema({
    _iduser: {type: String, required: false},
    _idcomunidad: {type: String, required: true},
    rol: {type: Boolean, required: false},
})

module.exports = model('roles', rolComunidadSchema);
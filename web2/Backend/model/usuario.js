const {model, Schema} = require("mongoose");

const usuarioSchema = new Schema({
    user: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

module.exports = model('users', usuarioSchema);
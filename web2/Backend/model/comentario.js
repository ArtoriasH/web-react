const {model, Schema} = require("mongoose");

const comentarioSchema = new Schema({
    contenidoComment: {type: String, required: true},
    fechaComment: {type: String, required: true, unique: true},
    idPost: {type: String, required: true},
})

module.exports = model('comentarios', comentarioSchema);
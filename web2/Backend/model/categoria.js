const {model, Schema} = require("mongoose");

const categoriaSchema = new Schema({
    nombreCategory: {type: String, required: true}, 
})

module.exports = model('categorias', categoriaSchema);
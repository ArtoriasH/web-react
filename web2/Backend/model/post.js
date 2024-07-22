const {model, Schema} = require("mongoose");

const postSchema = new Schema({
    contenidoPost: {type: String, required: true},
    //fechaPost: {type: Date, default: Date.now},   
})

module.exports = model('posts', postSchema);
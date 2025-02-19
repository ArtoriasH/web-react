const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://127.0.0.1:27017/db_bbl'

const db = async() =>{
    await mongoose.connect(MONGO_URL)
    .then(() => console.log('DB funcionando'))
    .catch((error) => console.error(error));
}

module.exports = db
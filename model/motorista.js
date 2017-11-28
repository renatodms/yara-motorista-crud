//imports
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//model
var motoristaSchema = new Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String
});

module.exports = mongoose.model('Motorista', motoristaSchema);
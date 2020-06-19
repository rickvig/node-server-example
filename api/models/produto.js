'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Produto = new Schema({
    nome: { type: String },
    descrilcao: { type: String },
    valor: { type: Number },
    desconto: { type: String },
    
    recieved_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Produto', Produto);
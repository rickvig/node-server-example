'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PromotionHub = new Schema({
    nome: { type: String },
    deconto: { type: String },
    valor: { type: String },
    
    recieved_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('PromotionHub', PromotionHub);
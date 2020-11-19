'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Professional = new Schema({
    name: { type: String },
    title: { type: String },
    expertise: { type: String },
    hour_value: { type: Number },
    rate: { type: Number },
    
    recieved_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Professional', Professional);
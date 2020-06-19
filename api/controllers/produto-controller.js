"use strict";

var mongoose = require("mongoose")

var Produto = mongoose.model("Produto");

exports.create = function (req, res) {
  var produto = new Produto(req.body);
  console.log(produto)

  produto.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.list = function (req, res) {
  Produto.find({}, function(err, produto) {
    res.send(produto);  
  });
  
};
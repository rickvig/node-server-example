"use strict";

var mongoose = require("mongoose");

var Professional = mongoose.model("Professional");

exports.create = function (req, res) {
  var profesional = new Professional(req.body);
  console.log(profesional);

  profesional.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.list = function (req, res) {
  Professional.find({}, function (err, produto) {
    res.send(produto);
  });
};

// Atualizando dados de um carro já existente
exports.get = function (req, res) {
  const novosDados = { marca: req.body.marca, modelo: req.body.modelo };

  Professional.findOne({ _id: req.params.id })
    .then((carro) => {
      res.json(carro);
    })
    .catch((error) => res.status(500).json(error));
};

// Atualizando dados de um carro já existente
exports.opa = function (req, res) {
  console.log(req.body);

  const novosDados = { 
    name: req.body.name, 
    title: req.body.title,
    expertise: req.body.expertise,
    hour_value: req.body.hour_value,
    rate: req.body.rate,
   };

  Professional.findOneAndUpdate({ _id: req.params.id }, novosDados, {new: true})
    .then((carro) => {
      res.json(carro);
    })
    .catch((error) => res.status(500).json(error));

  // const novosDados = { marca: req.body.marca, modelo: req.body.modelo };

  // Carro.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
  //   .then(carro => {
  //     res.json(carro);
  //   })
  //   .catch(error => res.status(500).json(error));
};

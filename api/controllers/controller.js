"use strict";

var mongoose = require("mongoose")

var PromotionHub = mongoose.model("PromotionHub");

exports.create = function (req, res) {
  console.log("POST - Header", req.headers);

  var promotion = new PromotionHub(req.body);
  console.log(promotion)
  promotion.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.list = function (req, res) {
  console.log("get - Header", req.headers);

  PromotionHub.find({}, function(err, promotion) {
    res.send(promotion);  
  });
};

exports.delete_all = function (req, res) {
  console.log("delete", req.headers);

  PromotionHub.remove({}, () => {
    res.send("DETELE ALL");  
  })
  
};

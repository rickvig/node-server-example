"use strict";

var mongoose = require("mongoose")
var PromotionHub = mongoose.model("PromotionHub");

exports.receive_a_postback = function (req, res) {
  console.log("POST - Header", req.headers);

  var promotion = new PromotionHub(req.body);
  promotion.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.list_promotions = function (req, res) {
  console.log("get - Header", req.headers);

  PromotionHub.find({}, function(err, promotion) {
    res.send(promotion);  
  });
};

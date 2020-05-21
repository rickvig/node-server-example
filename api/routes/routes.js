"use strict";

module.exports = function (app) {
  var postback = require("../controllers/controller");

  app.route("/promotios-hub").post(postback.receive_a_postback);

  app.route("/promotios-hub").get(postback.list_promotions);
};

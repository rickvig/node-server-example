"use strict";

module.exports = function (app) {
  var promotionsController = require("../controllers/controller");
  app.route("/promotios-hub").post(promotionsController.create);
  app.route("/promotios-hub").get(promotionsController.list);
  app.route("/promotios-hub/delete-all").post(promotionsController.delete_all);
  
  var produtoController = require("../controllers/produto-controller");
  app.route("/produtos").post(produtoController.create);
  app.route("/produtos").get(produtoController.list);
  
};

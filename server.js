var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    PostbackUpnid = require('./api/models/model'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance; connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/postback', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Digest Postback RESTful API server started on: ' + port);
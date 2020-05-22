var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

    var cors = require('cors')

require('./api/models/model'), //created model loading here
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 
    'mongodb://localhost:27017/serve-node-example', 
    {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// use it before all route definitions
app.use(cors());

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Server Node Example RESTful API server started on: ' + port);
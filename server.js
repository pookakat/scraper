var express = require('express'); 
var mongoose = require('mongoose');

var app = express();

var PORT = process.env.PORT || 8000;

app.use("/", express.static('app/public'));
require("./app/routing/apiRoutes.js")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function(){console.log(`Listening on port ${PORT}`)});
var express = require('express'); 
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8000;

app.use("/", express.static('app/public'));
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function(){console.log(`Listening on port ${PORT}`)});
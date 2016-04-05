var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./models');

app.use(bodyParser());

require('./routes')(app);

app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
});

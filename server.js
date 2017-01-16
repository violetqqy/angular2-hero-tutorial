var express = require('express');
var app = express();

app.use('/', express.static(process.cwd() + '/dist'));

var server = app.listen(3000, function() {

  var port = server.address().port

  console.log('Your app is running on PORT: ' + port)

});

var bIndex  = fs.readFileSync("index.html");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(bIndex.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
